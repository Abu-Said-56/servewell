
const OrderFoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="card bg-base-100 w-96 shadow-xl border border-sky-400">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <p className="text-xl font-bold text-orange-400">${price}</p>
                <div className="card-actions">
                    <button className="btn btn-outline text-lg uppercase border-4 border-b-yellow-600 flex mx-auto">Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default OrderFoodCard;