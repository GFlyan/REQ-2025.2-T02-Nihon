"use client"
import Gallery from './Gallery';
import Breadcrumb from './Breadcrumb';
import ProductInfo from './ProductInfo';
import SimilarProducts from './SimilarProducts';

export default function ProductDescriptionPage() {
  const images = [
    '/images/Banner_site_nihon.png',
    '/images/Leitor VSI 410 Toledo.png',
    '/images/automacao.png',
    '/images/mercado.png'
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <Breadcrumb productTitle="Produto Balança Comercial para Uso de Exemplo" />

        <div className="bg-white rounded-lg p-6 shadow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2">
              <Gallery images={images} />
            </div>

            <div className="md:col-span-1">
              <ProductInfo />
            </div>
          </div>

          <div className="mt-8">
            <SimilarProducts />
          </div>
        </div>
      </div>
    </div>
  );
}
