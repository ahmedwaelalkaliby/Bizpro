import AboutUs from '../Sections/AboutUs'
import Footer from '../Sections/Footer'
import GlobalPromotion from '../Sections/GlobalPromotion'
import HowItWorks from '../Sections/HowItWorks'
import Landing from '../Sections/Hero/Landing'
import Nav from '../Sections/Navbar/Nav'
import PopularPackages from '../Sections/PopularPackages'

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
