import Banner from "../components/home/Banner"
import CallToAction from "../components/home/CallToAction"
import Features from "../components/home/Features"
import Footer from "../components/home/Footer"
import Hero from "../components/home/Hero"
import Testimonials from "../components/home/Testimonials"


const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Hero></Hero>
        <Features></Features>
        <Testimonials></Testimonials>
        <CallToAction></CallToAction>
        <Footer></Footer>
    </div>
  )
}

export default Home