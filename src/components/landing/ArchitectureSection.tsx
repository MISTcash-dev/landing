import SectionHeading from "./SectionHeading";

const layers = [
  {
    name: "Chamber",
    role: "Payment record",
    detail:
      "Chamber keeps the private record of who owns what and confirms that each payment follows the protocol rules. It never holds the funds.",
  },
  {
    name: "Middleware",
    role: "Partner controls",
    detail:
      "Middleware is where a partner adds business rules such as limits, approvals, eligibility checks, and release conditions.",
  },
  {
    name: "Reserve",
    role: "Separate funds and policies",
    detail:
      "A Reserve holds the assets and applies one defined set of entry, payment, and withdrawal requirements.",
  },
];

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="border-t border-misty bg-white py-16 md:py-24">
      <div className="mist-section">
        <SectionHeading
          eyebrow="Architecture"
          title="A private record, your controls, separate funds."
          intro="MIST separates the payment record from partner controls and asset custody. Chamber tracks ownership; Middleware applies business rules; Reserves hold funds under a defined policy."
        />
        <div className="mx-auto flex flex-col items-stretch gap-2 md:flex-row md:items-stretch">
          {layers.map((layer) => (
            <div key={layer.name} className="flex flex-1 flex-col gap-8 md:flex-row md:items-stretch">
              <article className="flex-1 border border-misty bg-baby p-6">
                <h3 className="mist-h3 text-ink">{layer.name}</h3>
                <p className="mist-eyebrow mt-1 text-cobalt">{layer.role}</p>
                <p className="mt-3 text-sm text-ink/70">{layer.detail}</p>
              </article>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink/60">
          When funds enter MIST, the Chamber records the private balance and a
          Reserve holds the assets. Internal payments update private balances
          without moving funds on-chain. When funds leave, the Chamber checks
          the payment and the Reserve sends them to the stated destination.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-ink/60">
          Each payment uses one asset and one Reserve policy. Hidemi currently
          supports USDC across CCTP networks. Broader cross-network movement is
          a separate product layer, and USDT via usdt0 is planned.
        </p>
      </div>
    </section>
  );
}
