import OrderFoodCard from "../../OrderFoodCard/OrderFoodCard";

const ShowOrderFoodCard = ({items}) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 py-8 bg-slate-100 mx-auto w-fit gap-12 p-4'>
        {
            items.map(item => <OrderFoodCard
                key={item._id}
                item={item}
            ></OrderFoodCard>)
        }
    </div>
    );
};

export default ShowOrderFoodCard;