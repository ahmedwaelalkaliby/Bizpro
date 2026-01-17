import AboutUs from '../Sections/AboutUs'
import Footer from '../Sections/Footer'
import GlobalPromotion from '../Sections/GlobalPromotion'
import HowItWorks from '../Sections/HowItWorks'
import Landing from '../Sections/Landing'
import Nav from '../Sections/Navbar/Nav'
import PopularPackages from '../Sections/PopularPackages'

export default function Home() {
    return (
    <>
        <Nav />
         <Landing />
         <HowItWorks />
         <AboutUs />
         <PopularPackages />
         <GlobalPromotion />
         <Footer />
    </>
  )
}
