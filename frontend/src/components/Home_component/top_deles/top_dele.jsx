//import Top_deal_card from "./top_dele_card";
import { Heading } from "@chakra-ui/react";
import i1 from "../../../Homepage_Images/device/nkz8k.jpg";
import i2 from "../../../Homepage_Images/device/caxa60.jpg";
import i3 from "../../../Homepage_Images/device/car5cb.jpg";
import i4 from "../../../Homepage_Images/device/rkx2415ceos.jpg";
import i5 from "../../../Homepage_Images/device/somdrzx110nc.jpg";
import "./top_deal.css";


import DealCarousel from "./top_deles_cerosel";
 let deal_data = [
  {
    id:1,
    image: i1,
    name: "Nikon Z8 Mirrorless Digital Camera with NIKKOR Z 24-120mm f/4 S Lens",
    price: 4896.5,
    rating:5,
    reviews:154
  },
  {
    id:2,
    image: i2,
    name: "Canon XA60 4K Ultra HD Compact 20x Zoom Professional Camcorder",
    price: 1699,
    rating:4,
    reviews:132
  },
  {
    id:3,
    image: i3,
    name: "Canon EOS R5 C Mirrorless Digital Cinema Camera Body",
    price: 3999,
    rating:4,
    reviews:54
    
  },
  {
    id:4,
    image: i4,
    name: "Rokinon XEEN CF 24mm T1.5 Pro Cine Lens for Canon EF",
    price: 899,
    rating:2,
    reviews:15
  },
  {
    id:5,
    image: i5,
    name: "Sony MDR-ZX110NC Noise Canceling Stereo Closed Dynamic Headphones",
    price: 38,
    rating:5,
    reviews:356
  }
  
];

export default function Deal() {
  return (
    <div className="otd">
      <div>
        <Heading Style={"color: white;padding: 1.9rem 0;font-weight: 300;"}>
          OUR TOP DEALS
        </Heading>
      </div >
      <div id="dc"> < DealCarousel data={deal_data} /></div>
       
    </div>
  );
}
