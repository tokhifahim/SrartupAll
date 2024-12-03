
import Client from "./components/Client/Client";
import Email from "./components/Email/Email";
import Faq from "./components/Faq/Faq";
import Footer from "./components/footerfolder/FooterImg/Footer";
import Hero from "./components/HeroStartup/Hero";
import MakingWorld from "./components/MakingWorld/MakingWorld";
import Navbar from "./components/Navbar/Navbar"
import Pricing from "./components/PricingPlan/Pricing";
import Services from "./components/Service/Services";
import Team from "./components/Team/Team";
// import DarkMood from "./components/darkmode/DarkMood";


const App =()=>{
  return(
    
    <>
    
    <div className="">
    <Navbar/>
    <Hero/>
    <Services/>
    <MakingWorld/>
    <Pricing/>
    <Team/>
    <Faq/>
    <Client/>
    <Email/>
    <Footer/>
    {/* <DarkMood/> */}
    
  </div>
      </>
  )
}
export default App;