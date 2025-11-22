import { supabaseAdmin } from './client';

const supabase = supabaseAdmin();

export const fetchAllProducts = async () => {
    const {data: products, error} = await supabase.from('produto').select('*');
    if (error) throw error;
    return products;
}

export const fetchSupplier = async (idfornecedor: number) => { 
    const {data: supplier, error} = await supabase.from('fornecedor').select('*').eq('idfornecedor', idfornecedor).single();
    if (error) throw error;
    return supplier;
}

export const filterProductsByName = (products: any[] ,name: string) => {
    return products
        .filter(product => product.nome.toLowerCase().includes(name.toLowerCase()))
};
