import './TestimonialSection.css';
import winBidImage from '../assets/icons/winbid1.png';
import stairwayImage from '../assets/icons/stairways.png';
import ceramicsImage from '../assets/icons/timeceramics.png';
import collegeImage from '../assets/icons/Al-Aleem-Medical-College.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonialsData = [
    {
        imgSrc: winBidImage,
        title: "Sikandar e Azam (Director)",
        description: `"I have been involved in big projects for major corporations and the team at Prismatic Technologies is the best that I have worked with. They are timely, efficient and use best practices in their work. They move our project along quickly and keep us agile enough to be competitive."`
    },
    {
        imgSrc: stairwayImage,
        title: "Yousuf AlSereidi (CEO)",
        description: `"This a certificate of appreciation and testimonial from SMC family to Prismatic Technologies Limited for having completed the project of building & designing Ecommerce (www.siuae.ae). We extend our thankfulness to Prismatic team who worked hard in delivering the project and their management for our sighting the project."`
    },
    {
        imgSrc: ceramicsImage,
        title: "Mr. Xiao (CEO)",
        description: `"We value our relationship with Prismatic technologies. They’ve proven themselves to be proficient and willing partners in numerous development projects, and their ability to code in many environments gives us the confidence that we’ll be able to handle any new business opportunities that come our way."`
    },
    {
        imgSrc: collegeImage,
        title: "AL-ALEEM MEDICAL COLLEGE",
        description: `"Their LMS has a detailed administrator portal as well as a parent portal which has made managing all operations very easy. Very few LMS have all the portals in one system and that's what we like about Prismatic's LMS. Thanks to them!"`
    }
];


const TestimonialSection = () => {
    return (
        <>
            <div className="section-heading headingedit2">
                <h2>TESTIMONIALS<em></em></h2>
                <hr style={{ width: '80px', marginTop: '1rem', height: '1px' }} />
            </div>
            <section id="testim" className="testim">
                <div className="wrap">
                    <Swiper
                        modules={[ A11y, Autoplay, Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        navigation={true}
                        pagination={{clickable: true}}
                        loop={true}
                        className="mySwiper"
                    >
                        {
                            testimonialsData.map((testimonial, index) => (
                                <SwiperSlide key={index}>
                                    <div id="testim-content" className="cont">
                                        <div className="active">
                                            <div className="img"><img src={testimonial.imgSrc} alt={ testimonial.title }/></div>
                                            <h2>{ testimonial.title }</h2>
                                            <p>{testimonial.description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default TestimonialSection