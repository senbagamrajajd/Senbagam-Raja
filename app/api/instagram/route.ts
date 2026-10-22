import { NextResponse } from "next/server";

interface InstagramPost {
  id: string;
  caption?: string;
  media_type?: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink?: string;
  timestamp?: string;
  username?: string;
}

interface InstagramApiResponse {
  data?: InstagramPost[];
  error?: {
    message?: string;
  };
}

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN?.trim();
  const userId = process.env.INSTAGRAM_USER_ID?.trim();

  if (!accessToken || !userId) {
    return NextResponse.json(
      {
        success: false,
        connected: false,
        message: "Instagram API credentials are not configured yet.",
        posts: [],
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  }

  const apiVersion = process.env.INSTAGRAM_API_VERSION?.trim() || "v24.0";
  const url = new URL(
    `https://graph.facebook.com/${encodeURIComponent(apiVersion)}/${encodeURIComponent(userId)}/media`,
  );
  url.searchParams.set(
    "fields",
    "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,username",
  );
  url.searchParams.set("limit", "12");

  try {
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
      next: { revalidate: 900 },
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          connected: true,
          message:
            "Instagram could not load posts. Check the access token and account permissions.",
          posts: [],
        },
        { status: 502, headers: { "Cache-Control": "no-store" } },
      );
    }

    const result = (await response.json()) as InstagramApiResponse;
    if (result.error) {
      return NextResponse.json(
        {
          success: false,
          connected: true,
          message:
            "Instagram could not load posts. Check the access token and account permissions.",
          posts: [],
        },
        { status: 502, headers: { "Cache-Control": "no-store" } },
      );
    }

    const posts = Array.isArray(result.data)
      ? result.data.filter((post) => typeof post.id === "string")
      : [];

    return NextResponse.json(
      { success: true, connected: true, message: "", posts },
      { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" } },
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        connected: true,
        message: "Instagram is temporarily unavailable. Please try again later.",
        posts: [],
      },
      { status: 502, headers: { "Cache-Control": "no-store" } },
    );
  }
}