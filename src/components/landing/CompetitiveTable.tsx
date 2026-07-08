import { Check, X, Minus } from "lucide-react";

type CellValue = "yes" | "no" | "partial" | string;

interface Row {
  feature: string;
  mist: CellValue;
  railgun: CellValue;
  aztec: CellValue;
  penumbra: CellValue;
}

const rows: Row[] = [
  {
    feature: "Consumer app",
    mist: "yes",
    railgun: "no",
    aztec: "no",
    penumbra: "no",
  },
  {
    feature: "Cost per tx",
    mist: "0.5% fee",
    railgun: "0.5% fee",
    aztec: "Gas + proving",
    penumbra: "Low (IBC only)",
  },
  {
    feature: "Cross-chain",
    mist: "yes",
    railgun: "yes",
    aztec: "no",
    penumbra: "no",
  },
  {
    feature: "Compliance-first",
    mist: "yes",
    railgun: "yes",
    aztec: "partial",
    penumbra: "partial",
  },
  {
    feature: "No blockchain knowledge",
    mist: "yes",
    railgun: "no",
    aztec: "no",
    penumbra: "no",
  },
  {
    feature: "Stablecoin and fiat focus",
    mist: "yes",
    railgun: "no",
    aztec: "no",
    penumbra: "no",
  },
];

function CellContent({ value }: { value: CellValue }) {
  if (value === "yes")
    return <Check className="mx-auto h-5 w-5 text-success" />;
  if (value === "no") return <X className="mx-auto h-5 w-5 text-danger" />;
  if (value === "partial")
    return <Minus className="mx-auto h-5 w-5 text-warning" />;
  return (
    <span className="text-sm text-slate-400">{value}</span>
  );
}

const competitors = [
  { key: "mist" as const, label: "MIST", highlight: true },
  { key: "railgun" as const, label: "Railgun", highlight: false },
  { key: "aztec" as const, label: "Aztec", highlight: false },
  { key: "penumbra" as const, label: "Penumbra", highlight: false },
];

export default function CompetitiveTable() {
  return (
    <section id="compare" className="relative px-6 py-8">
      <div className="divider-cyan mx-auto mb-16 max-w-md" />

      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            How We Compare
          </p>
          <h2 className="mb-16 text-3xl font-bold text-white md:text-4xl">
            The privacy landscape
          </h2>
        </div>

        {/* Table - Desktop */}
        <div className="hidden overflow-hidden rounded-2xl border border-white/5 md:block">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 bg-navy-900/60">
                <th className="p-5 text-sm font-medium text-slate-500">
                  Feature
                </th>
                {competitors.map((c) => (
                  <th
                    key={c.key}
                    className={`p-5 text-center text-sm font-semibold ${c.highlight ? "text-cyan-400" : "text-slate-400"}`}
                  >
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-white/5 ${i % 2 === 0 ? "bg-navy-950/40" : "bg-navy-900/20"}`}
                >
                  <td className="p-5 text-sm font-medium text-slate-300">
                    {row.feature}
                  </td>
                  {competitors.map((c) => (
                    <td
                      key={c.key}
                      className={`p-5 text-center ${c.highlight ? "bg-cyan-400/5" : ""}`}
                    >
                      <CellContent value={row[c.key]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table - Mobile cards */}
        <div className="space-y-4 md:hidden">
          {rows.map((row) => (
            <div
              key={row.feature}
              className="rounded-xl border border-white/5 bg-navy-900/40 p-5"
            >
              <p className="mb-3 text-sm font-semibold text-white">
                {row.feature}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {competitors.map((c) => (
                  <div
                    key={c.key}
                    className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs ${c.highlight ? "bg-cyan-400/10" : "bg-navy-800/50"}`}
                  >
                    <span
                      className={`font-medium ${c.highlight ? "text-cyan-400" : "text-slate-500"}`}
                    >
                      {c.label}:
                    </span>
                    <CellContent value={row[c.key]} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}