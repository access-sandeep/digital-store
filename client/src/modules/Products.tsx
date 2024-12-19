import Storecontext from "../contexts/storeContext";
import { useContext, useEffect, useState } from "react";
import { fetchProduct } from "../store/products";
import { ActionProduct } from "../shared/types";
import ProductCard from "./common/ProductCard";

export default function Products() {
    const store = useContext(Storecontext);
    const [products, setProducts] = useState(store.getState().products as Array<ActionProduct>);
     
    store.subscribe(()=>{
        setProducts(store.getState().products);
    });

    useEffect(()=>{
        const fetchProducts = async () => {
            store.dispatch(fetchProduct({
                url: "products", 
                method: "GET", 
                token: store.getState().login[0].access_token,
                data: {
                    id: "N/A",
                    name: "N/A",
                    sku: "N/A", 
                    description: "N/A", 
                    short_description: "N/A"
                }, 
                onSuccess: "products/successActions", 
                onError: "products/errorActions"
            }));
        }

        if (store.getState().products.length===0) {
            fetchProducts();   
        }
    }, [products, store]);
   
    return (
        <>
            <div className="row">
                {products.map((p,k)=>{
                    return <ProductCard product={p} />
                })}
            </div>
        </>
    )
}