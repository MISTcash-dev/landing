import SectionHeading from "./SectionHeading";
import TweetEmbed from "./TweetEmbed";

const tweets = [
  { id: "2017258450435142037", author: "ikubjas" },
  { id: "2017013736502866210", author: "ExpatCrypto3" },
  { id: "2017020644928422262", author: "LauraM10g" },
];

export default function SignalSection() {
  return (
    <section className="border-t border-misty bg-baby py-16 md:py-24">
      <div className="mist-section">
        <SectionHeading
          eyebrow="Signal"
          title="In the wild."
          intro="Independent takes on the protocol, from the people building in the same space."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tweets.map((t) => (
            <TweetEmbed key={t.id} id={t.id} author={t.author} />
          ))}
        </div>
      </div>
    </section>
  );
}
