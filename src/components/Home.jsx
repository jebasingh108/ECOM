import Products from "./Products"
import Nav from "./nav"
import About from "./About"
import Footer from "./Footer"
import Image from "./Image"

const Home=()=>{
    return(
        <div>
          
 <div>
    <Nav/>
    <Image/>
  <Products/>
  <About/>
  <Footer/>
 </div>


        </div>
    )
}
export default Home