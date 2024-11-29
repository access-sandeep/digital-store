import store from "./store/configureStore";
import { getProduct } from "./store/products";

const unsubscribe = store.subscribe(()=>{
    console.log("Updated", store.getState());
});

store.dispatch(getProduct());