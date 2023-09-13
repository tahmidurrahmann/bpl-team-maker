const Cart = ({cart, handleAddName}) => {
    const {name, role, image, salary, country} = cart;
    return (
        <div className="flex gap-5">
            <div className="font-semibold text-xl border p-6 m-6 rounded-lg space-y-5">
            <div className="flex justify-center">
            <img className="rounded-full" src={image} alt={`${image}`} />
            </div>
            <h2 className="text-center">{name}</h2>
            <div className="flex gap-6">
            <p>{role}</p>
            <p>${salary}</p>
            </div>
            <p className="text-center">{country}</p>
            <div className="flex justify-center">
            <button onClick={()=>handleAddName(cart)} className="bg-[aqua] m-4 px-4 py-2 rounded-lg">ADD</button>
            </div>
        </div>
        </div>
    );
};

export default Cart;