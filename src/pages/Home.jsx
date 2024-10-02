import React, { useEffect } from 'react';
import HeroSectionMain from '../components/HeroSectionMain';
import BusinessProbCard from '../components/BusinessProbCard';
import BusinessSolsSection from '../components/BusinessSolsSection';
import TrustPrisSection from '../components/TrustPrisSection';
import OurClientsSection from '../components/OurClientsSection';
import OurTechSection from '../components/OurTechSection';
import WhyChooseCardSection from '../components/WhyChooseCardSection';
import TestimonialSection from '../components/TestimonialSection';
import OurLocations from '../components/OurLocations';
import StrategicPartner from '../components/StrategicPartner';
import BlogsSection from '../components/BlogsSection';
import Aos from 'aos';

const Home = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div>
            <HeroSectionMain />
            <BusinessProbCard />
            <BusinessSolsSection />
            <TrustPrisSection />
            <OurClientsSection />
            <OurTechSection />
            <WhyChooseCardSection />
            <TestimonialSection />
            <OurLocations />
            <StrategicPartner />
            <BlogsSection />

        </div>
    )
}

export default Home