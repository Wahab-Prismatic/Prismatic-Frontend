
import './App.css'
// import BlogsSection from './components/BlogsSection';
import { Suspense, lazy } from 'react';
import ErrorBoundary from './services/ErrorBoundry.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Spinner from './common/Spinner.jsx';
const BlogsDetail = lazy(() => import('./components/BlogsDetail'));
const About = lazy(() => import('./pages/About'));
const Home = lazy(() => import('./pages/Home'));
const Header = lazy(() => import('./components/Header'));
const Footer = lazy(() => import('./components/Footer'));
const PrismaticLife = lazy(() => import('./pages/PrismaticLife'));
const PremierAgency = lazy(() => import('./pages/Services/PremierAgency'));
const MobAppDev = lazy(() => import('./pages/Services/MobAppDev'));
const E_Commerce = lazy(() => import('./pages/Services/E_Commerce'));
const ERP = lazy(() => import('./pages/Products/ERP'));
const LMS = lazy(() => import('./pages/Products/LMS'));
const POS = lazy(() => import('./pages/Products/POS.jsx'));
const HRM = lazy(() => import('./pages/Products/HRM.jsx'));
const Portfolio = lazy(() => import('./pages/Portfolio.jsx'));
const Career = lazy(() => import('./pages/Career.jsx')); 
const Blogs = lazy(() => import('./pages/Blogs.jsx'));
const NotFound = lazy(() => import('./pages/NotFound'));


function App() {

  const Loader = () => <Spinner isCentered={true} />

  return (
    <>
      <div>
        <Header />
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path='/' element={<Home />} />
              {/* <Route path="/blogs" element={<BlogsSection />} /> */}
              <Route path='/blogs' element={<Blogs />} />
              <Route path='/blogs/:slug' element={<BlogsDetail />} />
              <Route path='/about-us' element={<About />} />
              <Route path='/prismatic-activity' element={<PrismaticLife />} />
              <Route path='/services/premier-advertising-agency-chicago' element={<PremierAgency />} />
              <Route path='/services/mobile-app-development' element={<MobAppDev />} />
              <Route path='/services/e-commerce-service' element={<E_Commerce />} />
              <Route path='/products/erp-software-in-pakistan' element={<ERP />} />
              <Route path='/products/learning-management-system' element={<LMS />} />
              <Route path='/products/pos-software-services' element={<POS />} />
              <Route path='/prismatic-portfolio' element={<Portfolio />} />
              <Route path='/products/hrm-software-services' element={<HRM />}/>
              <Route path='/career' element={<Career />} />
              <Route path='*' element={<NotFound />} />
              <Route />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <Footer />
      </div>
    </>
  )
}

export default App
