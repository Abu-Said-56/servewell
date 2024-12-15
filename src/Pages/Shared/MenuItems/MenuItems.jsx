
const MenuItems = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div>
            <div className="flex gap-4 p-4">
                <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[100px]" src={image} />
                <div className="flex gap-6">
                    <h1 className="text-lg font-bold gap-2">{name}...</h1>
                    <p className="font-thin from-neutral-200">{recipe}</p>
                    <p className="text-xl font-semibold text-orange-500">${price}</p>
                </div>
            </div>
           
        </div>
    );
};

export default MenuItems;