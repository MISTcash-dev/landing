import Image from "next/image";
import SectionHeading from "./SectionHeading";
import TweetEmbed from "./TweetEmbed";

const tweets = [
  "2017258450435142037",
  "2017013736502866210",
  "2017020644928422262",
  "2001166694572810503",
  "1992295027394146593",
  "1992255142939472293",
  "1992238899989770648",
];

export default function SignalSection() {
  return (
    <section className="border-t border-misty bg-baby py-16 md:py-24">
      <div className="mist-section">
        <SectionHeading
          eyebrow="Signal"
          title="In the wild."
          intro="Independent takes on the protocol, from the people building in the space."
        />
        <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
          {tweets.map((t) => (
            <div key={t} className="mb-6 break-inside-avoid">
              <TweetEmbed id={t} />
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
                src="/events/startup-house-pitch.jpg"
                alt="Shramee pitching at Startup house"
                width={2048}
                height={917}
                className="h-auto w-full"
              />
              <figcaption className="px-2 pb-1 pt-3 text-sm text-ink/70">
                Shramee pitching at Startup house
              </figcaption>
            </figure>
            <figure className="border border-misty bg-white p-2" style={{ borderRadius: "var(--radius)" }}>
              <Image
                src="/events/starkspace-buenos-aires-mist-pitch.jpeg"
                alt="MIST.cash pitch at StarkSpace Buenos Aires"
                width={2048}
                height={917}
                className="h-auto w-full"
              />
              <figcaption className="px-2 pb-1 pt-3 text-sm text-ink/70">
                MIST.cash pitch at StarkSpace Buenos Aires
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
