import "./more_cat.css"
/* import cat1 from "../../../Homepage_Images/cat1.webp"
import cat2 from "../../../Homepage_Images/cat2.jpg"
import cat3 from "../../../Homepage_Images/cat3.webp"
import cat4 from "../../../Homepage_Images/cat4.webp"
import cat5 from "../../../Homepage_Images/cat5.webp"
import cat6 from "../../../Homepage_Images/cat6.webp" */
import { Text } from "@chakra-ui/react"

export default function More_add(){
    return (
        <div className="More_add_main" >
            <div id="cat1" > 
                <Text fontSize={'3xl'} fontWeight={'medium'}>Shop Pre-Owned</Text>
                <Text fontSize={'lg'}>Save Money On Used, Open Box,</Text>
                <Text fontSize={'lg'}> and Refurbished Equipment & </Text>
                <Text fontSize={'lg'}>Electronics.</Text>
                <Text fontSize={'md'}>Shop Now</Text>
            </div>
            <div id="cat2" > 
                <Text fontSize={'3xl'} fontWeight={'medium'}>Sell or Trade</Text>
                <Text fontSize={'lg'}>Exchange Your Gear For Used  </Text>
                <Text fontSize={'lg'}>Items, Cash or Credit Toward</Text>
                <Text fontSize={'lg'}>Future Purchases.</Text>
                <Text fontSize={'md'}>Get A Quote</Text>
            </div>
            <div id="cat3" > 
                <Text fontSize={'3xl'} fontWeight={'medium'}>Students GearUP</Text>
                <Text fontSize={'lg'}>Exclusive student discounts on </Text>
                <Text fontSize={'lg'}>thousands of products in</Text>
                <Text fontSize={'lg'}> photography, video, audio, & more.</Text>
                <Text fontSize={'md'}>Register Now</Text>
            </div>
            <div id="cat4" > 
                <Text fontSize={'3xl'} fontWeight={'medium'}>Pexaro Rentals</Text>
                <Text fontSize={'lg'}>Providing the creative community </Text>
                <Text fontSize={'lg'}>with cameras, lenses, lighting & </Text>
                <Text fontSize={'lg'}>grip with two convenient locations in NYC.</Text>
                <Text fontSize={'md'}>Get Started</Text>
            </div>
            <div id="cat5" > 
                <Text fontSize={'3xl'} fontWeight={'medium'}>Pexaro Business</Text>
                <Text fontSize={'lg'}>Schedule a consultation, browse  </Text>
                <Text fontSize={'lg'}>financing options & purchase gear</Text>
                <Text fontSize={'lg'}>for your corporate, educational</Text>
                <Text fontSize={'lg'}>or government institution.</Text>
                <Text fontSize={'md'}>Enter Now</Text>
            </div>
            <div id="cat6" > 
                <Text fontSize={'3xl'} fontWeight={'medium'}>Printique</Text>
                <Text fontSize={'lg'}>Discover a world of options  your photographs.</Text>
                <Text fontSize={'lg'}>for printing and preserving</Text>
                <Text fontSize={'lg'}>your photographs.</Text>
                <Text fontSize={'lg'}>Visit Printique</Text>
            </div>

        </div>
    )
}