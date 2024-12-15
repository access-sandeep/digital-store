import { Link } from "react-router-dom";
import Storecontext from "../contexts/storeContext";
import { useContext, useEffect, useRef, useState } from "react";
import { fetchProduct } from "../store/products";
import { ActionProduct } from "../shared/types";

export default function Products() {
    const store = useContext(Storecontext);
    const [products, setProducts] = useState([] as Array<ActionProduct>);
    let ignore = useRef(false);

    useEffect(()=>{
        setProducts(store.getState().products);
        const fetchProducts = () => {
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
        return () => {
            setProducts([] as Array<ActionProduct>)
        };
    }, [ignore, products, store]);
    
    
    
    return (
        <>
            <h1>The list of products</h1>
            <ul>
                {products.map((p,k)=>{
                    return <li key={p?.id+'_'+k}>{p.name}</li>
                })}
            </ul>
        </>
    )
}