import Image from "next/image";
import SectionHeading from "./SectionHeading";
import TweetEmbed from "./TweetEmbed";

const tweets = [
  { id: "2017258450435142037", author: "ikubjas" },
  { id: "2017013736502866210", author: "ExpatCrypto3" },
  { id: "2017020644928422262", author: "LauraM10g" },
  { id: "2001166694572810503", author: "akashneelesh" },
  { id: "1992295027394146593", author: "AbdelStark" },
  { id: "1992255142939472293", author: "jonatanChaverri" },
  { id: "1992238899989770648", author: "barretodavid" },
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
          {tweets.map((t, index) => (
            <div
              key={t.id}
              className={
                index === tweets.length - 1
                  ? "md:col-span-2 lg:col-span-1 lg:col-start-2"
                  : undefined
              }
            >
              <TweetEmbed id={t.id} author={t.author} />
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-misty pt-12 md:mt-20">
          <p className="mist-eyebrow text-cobalt">Speaking</p>
          <h2 className="mist-h2 mt-3 text-ink">In the field.</h2>
          <p className="mt-4 max-w-xl text-ink/70">
            The protocol is shaped in public: explaining the systems, proving the
            trade-offs, and building privacy infrastructure that can be examined.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <figure className="border border-misty bg-white p-2" style={{ borderRadius: "var(--radius)" }}>
              <Image
                src="/events/events-zugrama-panel.jpeg"
                alt="Shramee speaking at a ZK privacy event"
                width={2048}
                height={917}
                className="h-auto w-full"
              />
              <figcaption className="px-2 pb-1 pt-3 text-sm text-ink/70">
                Speaking at a ZK privacy event.
              </figcaption>
            </figure>
            <figure className="border border-misty bg-white p-2" style={{ borderRadius: "var(--radius)" }}>
              <Image
                src="/events/events-zugrama-zk-state.jpeg"
                alt="Shramee speaking at a ZK privacy event"
                width={2048}
                height={917}
                className="h-auto w-full"
              />
              <figcaption className="px-2 pb-1 pt-3 text-sm text-ink/70">
                Speaking at a ZK privacy event.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
