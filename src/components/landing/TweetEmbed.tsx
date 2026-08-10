import { getTweet, type Tweet } from "react-tweet/api";
import { EmbeddedTweet } from "react-tweet";

export default async function TweetEmbed({
  id,
  author,
}: {
  id: string;
  author: string;
}) {
  let tweet: Tweet | undefined;
  try {
    tweet = await getTweet(id);
  } catch {
    tweet = undefined;
  }

  if (!tweet) {
    return (
      <div className="flex items-center justify-center bg-white p-7 text-center text-sm text-ink/60">
        This tweet could not be loaded.
      </div>
    );
  }

  return (
    <figure className="border border-misty bg-white" style={{ borderRadius: "var(--radius)" }}>
      <EmbeddedTweet tweet={tweet} />
      <figcaption className="border-t border-misty px-4 py-3 text-xs text-ink/60">
        Source: @{author} on X
      </figcaption>
    </figure>
  );
}
