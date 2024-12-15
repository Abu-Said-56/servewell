import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ShowRecomand from "../../Shared/ShowRecomand/ShowRecomand";

const Recomands = () => {
    const [ recomand, setRecomand ] = useState([]); 
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const cheifRecomsnds = data.filter(recom => recom.category === 'offered' )
            setRecomand(cheifRecomsnds);
        })
    },[])


    return (
        <div className="m-10 p-6 bg-gray-200">
            <SectionTitle
                subHeading="Should Try"
                heading="CHEF RECOMMENDS"
            ></SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto w-fit gap-8">
                {
                    recomand.map(recom => <ShowRecomand
                    key={recom._id}
                    recom={recom}
                    ></ShowRecomand>)
                }
            </div>
        </div>
    );
};

export default Recomands;

