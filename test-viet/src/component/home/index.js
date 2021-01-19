import SectionBrand from "./Brand"
import Footer from "../Footer"
import Header from "../Header"
import SectionBanner from "./SectionBaner";
import SectionProduct from "./SectionProduct";


const Home = () => {
    return ( 
        <>
        <Header/>
        <SectionBanner/>
        <SectionProduct/>
        <SectionBrand/>
        <Footer/>
        </>
     );
}
 
export default Home;