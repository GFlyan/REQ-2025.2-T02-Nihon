"use client"
import React, { useEffect, useMemo, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function ProductInfo({ product, loading }: { product: any, loading: boolean }) {
  const supabase = useMemo(() => createClient(), []);
  const [fornecedorNome, setFornecedorNome] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    async function loadFornecedor() {
      if (!product?.raw?.idfornecedor) {
        setFornecedorNome(null);
        return;
      }
      try {
        const res = await supabase
          .from("fornecedor")
          .select("nome")
          .eq("idfornecedor", product.raw.idfornecedor)
          .maybeSingle();
        const { data, error } = res as any;
        if (!mounted) return;
        if (error) {
          console.warn("Erro fornecedor:", error);
          setFornecedorNome(null);
        } else {
          setFornecedorNome(data?.nome ?? null);
        }
      } catch (e) {
        console.error(e);
        if (mounted) setFornecedorNome(null);
      }
    }
    loadFornecedor();
    return () => { mounted = false; };
  }, [product, supabase]);

  if (loading) return <div className="p-4">Carregando...</div>;

  if (!product) return <div className="p-4 text-gray-600">Produto não encontrado.</div>;

  return (
    <div>
      <h1 className="text-xl font-bold mb-2">{product.title}</h1>
      <button className="mb-4 inline-block bg-red-500 text-white px-4 py-2 rounded">Fazer Orçamento</button>

      <div className="bg-white border rounded-lg p-4 mb-4 shadow-sm">
        <h3 className="font-semibold mb-2">Características do Produto</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li><strong>Tipo:</strong> {product.tipo ?? "—"}</li>
          <li><strong>Fornecedor:</strong> {fornecedorNome ?? (product.raw?.nomefornecedor ?? "—")}</li>
          <li><strong>Status:</strong> {product.status ? "Disponível em estoque" : "Indisponível"}</li>
        </ul>
      </div>

      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <h3 className="font-semibold mb-2">Descrição do Produto</h3>
        <p className="text-sm text-gray-700">{product.description || product.raw?.descricao || "Sem descrição disponível."}</p>
      </div>
    </div>
  );
}
