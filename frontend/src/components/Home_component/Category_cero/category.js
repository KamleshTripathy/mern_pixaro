import { Heading, Text } from "@chakra-ui/react";
import cameras from "../../../Homepage_Images/cat/icon-category-cameras.png";
import lenses from "../../../Homepage_Images/cat/icon-category-lenses.png";
import video from"../../../Homepage_Images/cat/icon-category-video.webp";
import headphones from "../../../Homepage_Images/cat/icon-category-headphones.png";
import photoacc from "../../../Homepage_Images/cat/icon-category-photoacc.webp";

import Cat_carousel from "./cat_crousel";
let cat_data = [
   
    {
        image:cameras,
        name:"Camera"
    },
    {
        image:headphones,
        name:"HeadPhones"
    },
    {
        image:lenses,
        name:"Lenses"
    },
    {
        image:video,
        name:"Video"
    },
    {
        image:photoacc,
        name:"Accessories"
    }
];

export default function Category() {
  return (
    <>
      <Text fontSize="3xl" Style={"text-align:center;padding-left:2rem;padding-top:1rem"}>
        SHOP BY CATEGORY
      </Text>
      <Cat_carousel category_data={cat_data}  />
    </>
  );
}
