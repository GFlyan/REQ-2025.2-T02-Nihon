import StatusButton from "./StatusButton";
import { EditProduct, RemoveProduct } from "./ProductButtons";
import { fetchSupplierById } from "@/lib/supabase/admin/userClient-product";

type Product = {
    title:string,
    idfornecedor: string,
    status: boolean;
}

type ProductProps = {
    title: string,
    idfornecedor: number,
    status: boolean;
}

export default async function Product({title, idfornecedor, status}: ProductProps) {
    const supplier = await fetchSupplierById(idfornecedor);
    return(
        <div className="h-[120px] w-full flex justify-between bg-white border border-gray-300 rounded-3xl px-10 text-black">
            <div className="flex flex-col justify-center gap-2">

                <h1 className="text-[22.5px]">{title}</h1>
                <p className="text-[12.5px] text-gray-600">Fornecedor: {supplier.nome}</p>
            </div>
            <div className="flex justify-center items-center gap-3">
                <div className="flex justify-center items-center gap-2">
                    <p className="text-gray-600">Status:</p>
                    <StatusButton state={status}/>
                </div>
                <EditProduct/>
                <RemoveProduct/>
            </div>
        </div>
    );
}