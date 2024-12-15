import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featureImage from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div id="featured-background" className="m-16 p-4 bg-fixed text-white">
            <SectionTitle
                subHeading="Check it out"
                heading="From our menu"
            ></SectionTitle>
            <div className="md:flex justify-center items-center gap-8">
                <div className="mx-auto p-4">
                    <img src={featureImage} className="rounded-xl mb-7 w-[700px] h-[300px] " />
                </div>
                <div className="p-4 text-white">
                    <p className="text-lg font-bold">March 20, 2023</p>
                    <h1 className="uppercase text-xl font-semibold w">Where can in get some?</h1>
                    <p className="pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <button className="btn btn-outline uppercase text-white border-4 border-b-yellow-600">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;