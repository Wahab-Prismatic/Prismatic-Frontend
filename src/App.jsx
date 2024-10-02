
import './App.css'
// import BlogsSection from './components/BlogsSection';
import BlogsDetail from './components/BlogsDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import PrismaticLife from './pages/PrismaticLife';
import PremierAgency from './pages/Services/PremierAgency';
import MobAppDev from './pages/Services/MobAppDev';
import E_Commerce from './pages/Services/E_Commerce';
import NotFound from './pages/NotFound';
import ERP from './pages/Products/ERP';


function App() {

  return (
    <>
      <div>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path="/blogs" element={<BlogsSection />} /> */}
            <Route path='/blogs/:slug' element={<BlogsDetail />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/prismatic-activity' element={<PrismaticLife />}/>
            <Route path='/services/premier-advertising-agency-chicago' element={<PremierAgency />} />
            <Route path='/services/mobile-app-development' element={<MobAppDev />} />
            <Route path='/services/e-commerce-service' element={<E_Commerce />} />
            <Route path='/products/erp-software-in-pakistan' element={<ERP />}/>
            <Route path='*' element={<NotFound />} />
            <Route />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
