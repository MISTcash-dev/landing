import SectionHeading from "./SectionHeading";

type CellValue = "yes" | "no" | "partial" | string;

interface Row {
  capability: string;
  mist: CellValue;
  mixers: CellValue;
  privacyCoins: CellValue;
  onchainZkp: CellValue;
  fhe: CellValue;
}

const rows: Row[] = [
  {
    capability: "Cross-chain",
    mist: "yes",
    mixers: "partial",
    privacyCoins: "no",
    onchainZkp: "partial",
    fhe: "no",
  },
  {
    capability: "Multi-asset",
    mist: "yes",
    mixers: "partial",
    privacyCoins: "no",
    onchainZkp: "partial",
    fhe: "yes",
  },
  {
    capability: "Native programmable compliance",
    mist: "yes",
    mixers: "no",
    privacyCoins: "no",
    onchainZkp: "partial",
    fhe: "no",
  },
  {
    capability: "Settlement finality",
    mist: "yes",
    mixers: "yes",
    privacyCoins: "yes",
    onchainZkp: "partial",
    fhe: "no",
  },
  {
    capability: "Anonymity set",
    mist: "Shared",
    mixers: "Variable",
    privacyCoins: "Global",
    onchainZkp: "Variable",
    fhe: "Variable",
  },
];

function CellContent({ value }: { value: CellValue }) {
  if (value === "yes")
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0052FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    );
  if (value === "no")
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#081019" strokeWidth="2" strokeOpacity="0.3" strokeLinecap="round" className="mx-auto">
        <path d="M18 6 6 18M6 6l12 12" />
      </svg>
    );
  if (value === "partial")
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#081019" strokeWidth="2" strokeOpacity="0.5" strokeLinecap="round" className="mx-auto">
        <path d="M5 12h14" />
      </svg>
    );
  return <span className="text-sm text-ink/70">{value}</span>;
}

const competitors = [
  { key: "mist" as const, label: "MIST", highlight: true },
  { key: "mixers" as const, label: "Privacy pools", highlight: false },
  { key: "privacyCoins" as const, label: "Privacy coins", highlight: false },
  { key: "onchainZkp" as const, label: "On-chain ZKP", highlight: false },
  { key: "fhe" as const, label: "FHE", highlight: false },
];

export default function CompetitiveTable() {
  return (
    <section className="py-16 md:py-24">
      <div className="mist-section">
        <SectionHeading
          eyebrow="Why MIST"
          title="The white space is the intersection."
          intro="Cross-chain, multi-asset, and native programmable compliance. No other category occupies all three."
        />
        <div className="overflow-x-auto border border-misty bg-white">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="border-b border-misty">
                <th className="p-4 text-sm font-medium text-ink/60">Capability</th>
                {competitors.map((c) => (
                  <th
                    key={c.key}
                    className={`p-4 text-center text-sm font-semibold ${
                      c.highlight ? "bg-cobalt/10 text-cobalt" : "text-ink/70"
                    }`}
                  >
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.capability} className="border-b border-misty last:border-b-0">
                  <td className="p-4 text-sm font-medium text-ink">{row.capability}</td>
                  {competitors.map((c) => (
                    <td
                      key={c.key}
                      className={`p-4 text-center ${c.highlight ? "bg-cobalt/5" : ""}`}
                    >
                      <CellContent value={row[c.key]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink/60">
          Trade-offs are real. Privacy pools trade compliance for privacy,
          privacy coins trade ecosystems for anonymity, on-chain ZKP solutions
          trade
          cross-chain reach. MIST is built where none of those trades are
          required.
        </p>
      </div>
    </section>
  );
}
