
import { FaPhoneAlt, FaArrowLeft } from "react-icons/fa";

type Product = {
  idproduto: number;
  idfornecedor: number;
  nome: string;
  tipo: string;
  status: boolean;
  descricao: string;
};

export default function ProductInfo({ product, supplier }: { product: Product | null, supplier: string | null }) {

  return (
    <div className="relative">
      {/* Back button */}
      <button
        aria-label="Voltar para lista de produtos"
        className="fixed left-4 md:left-8 top-24 md:top-28 z-50 bg-white border border-gray-200 rounded-full p-3 shadow-md hover:shadow-lg transition-all flex items-center justify-center w-12 h-12 md:w-14 md:h-14"
        title="Voltar para produtos"
      >
        <FaArrowLeft className="w-6 h-6 md:w-8 md:h-8 text-gray-800" />
      </button>

      {/* Page content */}
      <h1 className="text-2xl font-bold mb-3">{product?.nome}</h1>

      <div className="mb-6">
        <button
          type="button"
          className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-6 py-3 rounded-lg shadow-md transition-colors"
        >
          Fazer Orçamento
        </button>
      </div>

      <div className="bg-white border rounded-lg p-4 mb-4 shadow-sm">
        <h3 className="font-semibold mb-2">Características do Produto</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li><strong>Tipo:</strong> {product?.tipo ?? "—"}</li>
          <li><strong>Fornecedor:</strong> {supplier ?? (supplier ?? "—")}</li>
          <li><strong>Status:</strong> {product?.status ? "Disponível em estoque" : "Indisponível"}</li>
        </ul>
      </div>

      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <h3 className="font-semibold mb-2">Descrição do Produto</h3>
        <p className="text-sm text-gray-700">{product?.descricao ?? "Sem descrição disponível."}</p>
      </div>
    </div>
  );
}
