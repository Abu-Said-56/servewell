// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper/modules';
import { AiFillNotification } from "react-icons/ai";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [testmonial, setTestmonial] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5001/reviews')
            .then(res => res.json())
            .then(data => {
                setTestmonial(data);
            })
    }, [])

    return (
        <section className='bg-slate-200 rounded-xl p-7 m-8'>
            <SectionTitle
                subHeading="What Our Clients Say"
                heading="Testimonials"
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    testmonial.map(item => <SwiperSlide
                        key={item._id}
                        item={item}
                    >
                        <div className='m-16 flex flex-col text-center items-center'>
                            <Rating className='pb-8'
                                style={{ maxWidth: 180 }}
                                value={item?.rating}
                                readOnly
                            />
                            <h1 className='text-5xl pb-4'><AiFillNotification></AiFillNotification> </h1>
                            <p className='w-[80%]'>{item?.details}</p>
                            <p className='text-3xl text-orange-400 pt-4'>{item?.name}</p>

                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;