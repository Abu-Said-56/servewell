import { useState } from 'react';
import orderFoodCover from '../../../../assets/shop/banner2.jpg'
import Cover from '../../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../../Hooks/useMenu';
import ShowOrderFoodCard from './ShowOrderFoodCard/ShowOrderFoodCard';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const OrderFood = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'drinks')

    return (
        <div>
            <Helmet>
                <title>ServeWeel | Order Food</title>
            </Helmet>
            <Cover image={orderFoodCover} title="Our Shope"></Cover>
            <div>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="text-xl text-center font-semibold uppercase">
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>

                    {/* For salad */}
                    <TabPanel>
                        <ShowOrderFoodCard items={salad}></ShowOrderFoodCard>
                    </TabPanel>

                    {/* For Pizza */}
                    <TabPanel>
                        <ShowOrderFoodCard items={pizza}></ShowOrderFoodCard>
                    </TabPanel>

                    {/* For Soup  */}
                    <TabPanel>
                        <ShowOrderFoodCard items={soup}></ShowOrderFoodCard>
                    </TabPanel>

                    {/* For Dessert */}
                    <TabPanel>
                        <ShowOrderFoodCard items={dessert}></ShowOrderFoodCard>
                    </TabPanel>

                    {/* For Drinks or Offered items*/}
                    <TabPanel>
                        <ShowOrderFoodCard items={drinks}></ShowOrderFoodCard>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OrderFood;