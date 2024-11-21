import { lazy } from 'react';

// Lazy loading components
const HeroSectionMain = lazy(() => import('../components/HeroSectionMain'));
const BusinessProbCard = lazy(() => import('../components/BusinessProbCard'));
const BusinessSolsSection = lazy(() => import('../components/BusinessSolsSection'));
const TrustPrisSection = lazy(() => import('../components/TrustPrisSection'));
const OurClientsSection = lazy(() => import('../components/OurClientsSection'));
const OurTechSection = lazy(() => import('../components/OurTechSection'));
const WhyChooseCardSection = lazy(() => import('../components/WhyChooseCardSection'));
const TestimonialSection = lazy(() => import('../components/TestimonialSection'));
const OurLocations = lazy(() => import('../components/OurLocations'));
const StrategicPartner = lazy(() => import('../components/StrategicPartner'));
const BlogsSection = lazy(() => import('../components/BlogsSection'));

const Home = () => {
    return (
        <>
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
        </>
    );
};

export default Home;
