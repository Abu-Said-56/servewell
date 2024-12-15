import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className='mt-10'>
            <section>
                <SectionTitle
                subHeading={"From 11:00am to 10:00pm"}
                heading={"Order Online"}
                ></SectionTitle>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}                  
                    autoplay={{
                        delay: 500,
                        pauseOnMouseEnter: true,
                        disableOnInteraction: false,
                      }}
                      modules={[ Pagination,]}
                   
                    className="mySwiper mb-20" >
                    <SwiperSlide>
                        <img src={slide1} />
                        <p className='text-3xl text-center text-red-700 -mt-24 uppercase'>Salad</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} />
                        <p className='text-3xl text-center text-red-700 -mt-24 uppercase'>Pizza</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} />
                        <p className='text-3xl text-center text-red-700 -mt-24 uppercase'>Supe</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} />
                        <p className='text-3xl text-center text-red-700 -mt-24 uppercase'>Desserts</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide5} />
                        <p className='text-3xl text-center text-red-700 -mt-24 uppercase'>Salad</p>
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>

    );
};

export default Category;