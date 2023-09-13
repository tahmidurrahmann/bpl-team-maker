import { useEffect, useState } from "react";
import Cart from "./Cart/Cart";
import Name from "../../Name/Name";

const Carts = () => {
    const [carts, setCarts] = useState([]);

    const [name, setName] = useState([]);

    const handleAddName = (cart) => {
        const showOnce = name.find(item => item.id === cart.id);
        if(showOnce){
          return  alert('added once')
        }else{
          return  setName([...name, cart])
        }
    }

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch('./data.json');
            const data = await response.json();
            setCarts(data);
        }
        fetchData();
    },[]);

    return (
        <div className="container mx-auto flex my-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-2/3">
            {
                carts.map(cart => <Cart key={cart.id} handleAddName={handleAddName} cart={cart}></Cart>)
            }
        </div>
        <div className="w-1/3">
            <Name name={name}></Name>
        </div>
        </div>
    );
};

export default Carts;