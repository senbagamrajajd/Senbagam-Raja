"use client";

import { useEffect, useState } from "react";

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

interface InstagramFeedResponse {
  success: boolean;
  connected: boolean;
  message: string;
  posts: InstagramPost[];
}

function formatPostDate(timestamp?: string) {
  if (!timestamp || Number.isNaN(Date.parse(timestamp))) return null;

  return new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(timestamp));
}

export default function InstagramFeed() {
  const [feed, setFeed] = useState<InstagramFeedResponse | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadFeed() {
      try {
        const response = await fetch("/api/instagram", {
          signal: controller.signal,
        });
        const result = (await response.json()) as InstagramFeedResponse;
        setFeed(result);
        setHasError(!response.ok && result.connected);
      } catch {
        if (!controller.signal.aborted) setHasError(true);
      }
    }

    void loadFeed();
    return () => controller.abort();
  }, []);

  const statusStyle = "card-glass rounded-xl px-6 py-8 text-center text-sm";

  return (
    <section aria-labelledby="instagram-heading" className="mt-20">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="accent-line mb-4" />
          <h2
            id="instagram-heading"
            className="font-display text-3xl font-bold sm:text-4xl"
            style={{ color: "var(--off-white)" }}
          >
            Latest from <span className="gold-text">Instagram</span>
          </h2>
        </div>
        {feed?.posts?.[0]?.username && (
          <p className="text-sm" style={{ color: "var(--slate)" }}>
            @{feed.posts[0].username}
          </p>
        )}
      </div>

      {!feed && !hasError && (
        <p className={statusStyle} style={{ color: "var(--slate)" }} role="status">
          Loading Instagram posts...
        </p>
      )}

      {hasError && (
        <p className={statusStyle} style={{ color: "var(--slate)" }} role="alert">
          Instagram is temporarily unavailable. Please visit again soon.
        </p>
      )}

      {feed && !hasError && !feed.connected && (
        <p className={statusStyle} style={{ color: "var(--slate)" }} role="status">
          Instagram is not connected yet. Recent posts will appear here once the
          feed is configured.
        </p>
      )}

      {feed && !hasError && feed.connected && !feed.success && (
        <p className={statusStyle} style={{ color: "var(--slate)" }} role="alert">
          {feed.message || "Instagram could not load posts. Please try again later."}
        </p>
      )}

      {feed?.success && feed.posts.length === 0 && (
        <p className={statusStyle} style={{ color: "var(--slate)" }} role="status">
          No Instagram posts are available yet.
        </p>
      )}

      {feed?.success && feed.posts.length > 0 && (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {feed.posts.map((post) => {
            const preview =
              post.media_type === "VIDEO"
                ? post.media_url || post.thumbnail_url
                : post.media_url || post.thumbnail_url;
            const date = formatPostDate(post.timestamp);

            return (
              <article
                key={post.id}
                className="card-glass overflow-hidden rounded-xl"
              >
                <div className="aspect-square overflow-hidden bg-black/20">
                  {post.media_type === "VIDEO" && post.media_url ? (
                    <video
                      className="h-full w-full object-cover"
                      src={post.media_url}
                      poster={post.thumbnail_url}
                      controls
                      playsInline
                      preload="none"
                      aria-label={post.caption || "Instagram video post"}
                    />
                  ) : preview ? (
                    <img
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                      src={preview}
                      alt={post.caption || "Instagram post"}
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="flex h-full items-center justify-center px-6 text-center text-sm"
                      style={{ color: "var(--slate)" }}
                    >
                      Preview unavailable
                    </div>
                  )}
                </div>

                <div className="p-4">
                  {date && (
                    <time
                      className="text-xs"
                      style={{ color: "var(--gold-light)" }}
                      dateTime={post.timestamp}
                    >
                      {date}
                    </time>
                  )}
                  <p
                    className="mt-2 line-clamp-3 min-h-[4.5rem] whitespace-pre-line text-sm leading-6"
                    style={{ color: "var(--off-white)" }}
                  >
                    {post.caption || "A recent Instagram post"}
                  </p>
                  {post.permalink && (
                    <a
                      className="mt-3 inline-block text-sm font-medium transition-colors hover:text-white"
                      style={{ color: "var(--gold-light)" }}
                      href={post.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Instagram
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}