import React from 'react';
import "./Testimonial.css"
import { Data } from './Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper";


const Testimonial = () => {
    return (
        <section className="testimonial container section" id='testimonials'>
            <h2 className="section__title">My Clients Say</h2>
            <span className="section__subtitle">Testimonial</span>

            <Swiper className="testimonial__container"
                grabCursor={true}
                spaceBetween={24}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48,
                    },
                }}
                modules={[Pagination, Autoplay]}
            >
                {Data.map(({ id, Image, title, description }) => {
                    return (
                        <SwiperSlide className="testimonial__card" key={id}>
                            <img src={Image} alt="" className='testimonial__img' />

                            <h3 className="testimonial__name">{title}</h3>
                            <p className="testimonial__description"> {description} </p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Testimonial