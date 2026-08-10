import { getTweet, type Tweet } from "react-tweet/api";
import { EmbeddedTweet } from "react-tweet";

export default async function TweetEmbed({ id }: { id: string }) {
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
    <div className="tweet-embed border border-misty bg-white" style={{ borderRadius: "var(--radius)" }}>
      <EmbeddedTweet tweet={tweet} />
    </div>
  );
}
