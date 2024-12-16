import Storecontext from "../contexts/storeContext";
import { useContext, useEffect, useState } from "react";
import { fetchProduct } from "../store/products";
import { ActionProduct } from "../shared/types";

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
            <h1>The list of products</h1>
            <ul>
                {products.map((p,k)=>{
                    return <li key={p?.id+'_'+k}>
                        <div>
                            <b>{p.name}</b> <sup>({p.sku})</sup>
                            <p>{p.short_description}</p>
                            <p>{p.description}</p>
                        </div>
                    </li>
                })}
            </ul>
        </>
    )
}