import AboutUs from '../Sections/About Us/AboutUs'
import Footer from '../Sections/Footer/Footer'
import GlobalPromotion from '../Sections/Global Promotion/GlobalPromotion'
import HowItWorks from '../Sections/How It Works/HowItWorks'
import Landing from '../Sections/Hero/Landing'
import Nav from '../Sections/Navbar/Nav'
import PopularPackages from '../Sections/Popular Packedges/PopularPackages'

export default function Home() {
    return (
      <>
        <div className="relative w-full"> 
      {/* 1. Navbar is positioned absolutely within this relative container */}
      <Nav />

      {/* 2. Content Sections */}
      <main>
        <Landing />
        <HowItWorks />
        <AboutUs />
        <PopularPackages />
        <GlobalPromotion />
        <Footer />
      </main>
    </div>
         
    </>
  )
}
