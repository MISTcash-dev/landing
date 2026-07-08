import { Tweet } from "react-tweet";

const tweetUrls = [
  // "https://x.com/_mistcash/status/2016999841243707103",
  "https://x.com/ikubjas/status/2017258450435142037",
  "https://x.com/ExpatCrypto3/status/2017013736502866210",
  "https://x.com/leolarav/status/2018292615406661674",
  "https://x.com/LauraM10g/status/2017020644928422262",
  // "https://x.com/MentorNotPseudo/status/2017001252077338738",
];

export default function TestimonialsSection() {
  return (
    <section className="relative px-6 py-8">
      <div className="divider-cyan mx-auto mb-16 max-w-md" />
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Community
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            What people are saying
          </h2>
        </div>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:gap-16 lg:mx-16 testimonial-tweets">
          {tweetUrls.map((url) => (
            <Tweet key={url} id={url.split('/').pop() || ''} />
          ))}
        </div>
      </div>
    </section>
  );
}
