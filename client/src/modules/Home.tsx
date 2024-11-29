import { useContext, useEffect, useState } from "react";
import { fetchProduct } from '../store/products'
import Storecontext from "../contexts/storeContext";

export default function Home() {
    const store = useContext(Storecontext);
    const [products, setProducts] = useState([]);

    const unsubscribe = store.subscribe(()=>{
        setProducts(store.getState().products);
    });
    useEffect(() => {
        store.dispatch(fetchProduct({
            url: "products", 
            method: "GET", 
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

        return unsubscribe();
    }, []);
    return (
        <>
            <h1>Following are the products:</h1>
            <ul>
            {products.map((prod:any)=>{
                return <li key={prod.id}>{prod.name}</li>
            })}
            </ul>
        </>
    )
}