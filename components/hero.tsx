import Image from 'next/image';

export function Hero({title, subtitle}: {title: string; subtitle: string}) {
  return (
    <section className="bg-nature-gradient">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
          <p className="mt-4 text-slate-700">{subtitle}</p>
        </div>
        <Image src="/hero-placeholder.svg" alt="Vakantiepark sfeerbeeld" width={1200} height={800} className="rounded-2xl border object-cover" priority />
      </div>
    </section>
  );
}
