import { fetchProductById, fetchSupplierById, fetchImagesByProductId } from "@/lib/supabase/products";
import Gallery from "./Gallery";
import Breadcrumb from "./Breadcrumb";
import ProductInfo from "./ProductInfo";
import SimilarProducts from "./SimilarProducts";
import { sup } from "framer-motion/client";

type Product = {
  idproduto: number;
  idfornecedor: number;
  nome: string;
  tipo: string;
  status: boolean;
  descricao: string;
};


type ProductImage = {
  imagesUrls: string[];
};


export default async function ProductDescriptionPage({ searchParams }: { searchParams: { id: number }}) {
  const idproduto = Number(searchParams.id);

  let product: Product | null = null;
  let supplierName: string | null = null;
  let error = "";
  let loading = true;
  let images: string[] = [];

  try {
    product = await fetchProductById(idproduto);
    supplierName = product ? (await fetchSupplierById(product.idfornecedor)).nome : null;
    images = (await fetchImagesByProductId(idproduto)).imagesUrls;
    if (!product) {
      error = "Produto não encontrado.";
    }
  } catch (e) {
    error = "Erro ao carregar produto.";
  } finally {
    loading = false;
  }


  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <Breadcrumb productTitle={product?.nome} />

        <div className="bg-white rounded-lg p-6 shadow">
          {error && <div className="mb-4 text-red-600">{error}</div>}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start">
            <div className="sm:col-span-1 md:col-span-2">
              <Gallery images={images} />
            </div>

            <div className="sm:col-span-1 md:col-span-1 md:sticky md:top-24">
              <ProductInfo product={product} supplier={supplierName}/>
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
