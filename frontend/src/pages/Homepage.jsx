import { Text } from "@chakra-ui/react";
import React from "react";
import Category from "../components/Home_component/Category_cero/category";
import Heroslider from "../components/Home_component/heroslider";
import More_add from "../components/Home_component/more_cat/more_cat";
import Deal from "../components/Home_component/top_deles/top_dele";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./homepage.css";
const Homepage = () => {
  return (
    <>
      <div className="nv">
        <Navbar />
      </div>
      <div className="hs" Style={"background:#F3F3F3 "}>
        <Heroslider />
        <br />
        <br />
        <div className="top_deals" Style={"margin-right:150px;margin-left:150px;margin-top:35px"}>
          <Deal/>
        </div>
        <br />
        <br />

        <div className="ct" Style={"margin-right:150px;margin-left:150px;margin-top:35px;background-color:#edebeb"}>
          <Category />
        </div>
        
      <div Style={"margin-right:150px;margin-left:150px;margin-top:35px;"}>
      <More_add />
      </div>
        
       

        <div Style={"padding:0.2rem;margin-top:35px;background-color:#fff"}>
          <Text fontSize="3xl">
            Photography Equipment, Video Gear, and Electronics
          </Text>
          <Text pl={'150px'} pr={'150px'}>
            We are the world's only full-service destination for photo, video
            and electronics. We're more than a camera store—we offer the best
            selection and prices on professional photography and video gear,
            pro-audio, and consumer electronics such as home theaters , desktop
            computers, laptops, iPads, home office equipment and more. Equip
            your creativity with the best & newest Mirrorless, Point & Shoot,
            and DSLR photography equipment from brands like Sony, Canon and
            Nikon, or shop for the latest in smart tech, gaming, drones, musical
            instruments and recording studio gear.
          </Text>
          <Text fontSize="3xl">Exclusive Savings All Year Long</Text>
          <Text>
            For savings you won't find anywhere else and for weekly trending
            deals on top products from industry leading brands, browse Deals,
            Used, Deal Of The Day, only at Adorama.
          </Text>
        </div>

        <br />
        <br />
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
