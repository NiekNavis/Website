import {siteConfig} from '@/content/site';

export function PricingTable() {
  const p = siteConfig.pricing2026;
  const rows = [
    ['Basistarief', p.base],
    ['ACSI tarief', p.acsi],
    ['ACSI uitzonderingen', p.acsiExclusions],
    ['XL plaats', p.xl],
    ['Persoonstarief', p.person],
    ['Toeristenbelasting', p.touristTax],
    ['Kinderen', p.children],
    ['Hond', p.dog]
  ];

  return (
    <div className="overflow-hidden rounded-2xl border bg-white">
      <table className="w-full text-sm">
        <tbody>
          {rows.map(([k, v]) => (
            <tr key={k} className="border-b last:border-0">
              <th className="w-1/3 bg-slate-50 p-3 text-left font-semibold">{k}</th>
              <td className="p-3">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
