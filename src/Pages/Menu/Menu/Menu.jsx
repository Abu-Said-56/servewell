import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

import maincoverImage from '../../../assets/menu/banner3.jpg'
import dessertImage from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImage from '../../../assets/menu/pizza-bg.jpg'
import saladImage from '../../../assets/menu/salad-bg.jpg'
import soupImage from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>ServeWeel | Menu</title>
            </Helmet>
            <div>
                <Cover image={maincoverImage} title="Our Menu"></Cover>
                <div className='p-8 bg-slate-200'>
                    {/* For Section tittle section */}
                    <SectionTitle subHeading="Don't Miss" heading="Today's Offer" ></SectionTitle>
                </div>

                <div>
                    {/* For Offered Menu Items */}
                    <MenuCategory
                        items={offered}>
                    </MenuCategory>

                    {/* Dessert Category */}
                    <MenuCategory image={dessertImage}
                        items={desserts}
                        title="Desert">
                    </MenuCategory>

                    {/* Pizza Category */}
                    <MenuCategory image={pizzaImage}
                        items={pizza}
                        title="Pizza">
                    </MenuCategory>

                    {/* salad Category */}
                    <MenuCategory image={saladImage}
                        items={salad}
                        title="Salad">
                    </MenuCategory>

                    {/* soup Category */}
                    <MenuCategory image={soupImage}
                        items={soup}
                        title="Soup">
                    </MenuCategory>
                </div>
            </div>
        </div>
    );
};

export default Menu;