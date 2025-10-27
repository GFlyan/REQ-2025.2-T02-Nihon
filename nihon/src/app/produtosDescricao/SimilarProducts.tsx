"use client"
import Image from "next/image";

const items = [
  { id: 1, title: 'Lorem', img: '/images/automacao.png' },
  { id: 2, title: 'Lorem', img: '/images/refrigeracao.png' },
  { id: 3, title: 'Lorem', img: '/images/padaria2.png' },
  { id: 4, title: 'Lorem', img: '/images/mercado.png' },
];

export default function SimilarProducts() {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-semibold mb-4">Produtos Semelhantes</h2>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {items.map((it) => (
          <div key={it.id} className="min-w-[160px] bg-white rounded-lg shadow p-4 flex-shrink-0">
            <div className="w-full h-28 bg-gray-50 rounded flex items-center justify-center mb-3">
              <Image src={it.img} alt={it.title} width={120} height={90} className="object-contain" />
            </div>
            <div className="text-sm text-center">{it.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
