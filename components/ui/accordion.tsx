'use client';

import {useState} from 'react';
import {ChevronDown} from 'lucide-react';

export function Accordion({items}: {items: {q: string; a: string}[]}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div key={item.q} className="rounded-xl border border-slate-200 bg-white">
          <button
            className="flex w-full items-center justify-between p-4 text-left font-medium"
            aria-expanded={open === idx}
            onClick={() => setOpen(open === idx ? null : idx)}
          >
            {item.q}
            <ChevronDown className={`h-4 w-4 transition ${open === idx ? 'rotate-180' : ''}`} />
          </button>
          {open === idx && <p className="px-4 pb-4 text-sm text-slate-700">{item.a}</p>}
        </div>
      ))}
    </div>
  );
}
