
const ShowRecomand = ({ recom }) => {
    const { name, image, price, recipe } = recom;
    return ( 
            <div className="card bg-base-100 w-96 shadow-xl border-2 border-sky-400">
                <figure className="px-10 pt-10">
                    <img
                        src={image}                      
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <p className="text-xl font-bold text-orange-500">${price}</p>
                    <div className="card-actions">
                        <button className="btn btn-outline uppercase border-4 border-b-yellow-600">add to cart</button>
                    </div>
                </div>
            </div>
    );
};

export default ShowRecomand;