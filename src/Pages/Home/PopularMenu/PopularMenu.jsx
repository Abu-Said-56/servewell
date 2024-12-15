import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems);
            })
    }, [])
    return (
        <section className="m-12 p-6 bg-slate-100">
            <SectionTitle
                subHeading="Popular menu"
                heading="From our menu"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4 pb-4">
                {
                    menu.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline uppercase border-4 border-b-yellow-600">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;