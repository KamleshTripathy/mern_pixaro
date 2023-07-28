import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';



const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'2xl'} mb={2}>
      {children}
    </Text>
  );
};

const  Footer=() =>{
  return (
    <Box
      bg={['rgb(0,63,127)']}
      color={'#fff'}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8} >
          <Stack align={'flex-start'} >
            <ListHeader    >Who We Are</ListHeader>
            <Link fontSize='15px' href={'#'}>About Adorama</Link>
            <Link fontSize='15px' href={'#'}>Our History</Link>
            <Link fontSize='15px' href={'#'}>Creator Highlights</Link>
            <Link fontSize='15px' href={'#'}>Adorama Reviews</Link>
            <Link fontSize='15px' href={'#'}>Map & Directions</Link>
            <Link fontSize='15px' href={'#'}>Events</Link>
            <Link fontSize='15px' href={'#'}>Learning Center</Link>
            <Link fontSize='15px' href={'#'}>Gift Cards</Link>
            <Link fontSize='15px' href={'#'}>Brands</Link>

          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader  >Special Programs</ListHeader>
            <Link fontSize='15px' href={'#'}>Corporate</Link>
            <Link fontSize='15px' href={'#'}>Education</Link>
            <Link fontSize='15px' href={'#'}>Government</Link>
            <Link fontSize='15px' href={'#'}>VIP Rewards</Link>
            <Link fontSize='15px' href={'#'}>Students</Link>
            <Link fontSize='15px' href={'#'}>Adorama Protect</Link>

          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader  >How Can We Help</ListHeader>
            <Link fontSize='15px' href={'#'}>Customer Service</Link>
            <Link fontSize='15px' href={'#'}>Track Your Order</Link>
            <Link fontSize='15px' href={'#'}>Shipping & Delivery</Link>
            <Link fontSize='15px' href={'#'}>In-Store Pickup</Link>
            <Link fontSize='15px' href={'#'}>International Orders</Link>
            <Link fontSize='15px' href={'#'}>Return Policy</Link>
            <Link fontSize='15px' href={'#'}>Contact Us</Link>
            <Link fontSize='15px' href={'#'}>Warranties</Link>
            <Link fontSize='15px' href={'#'}>Accessibility Policy</Link>

          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader  >More Services</ListHeader>
            <Link fontSize='15px' href={'#'}>Photo Printing</Link>
            <Link fontSize='15px' href={'#'}>Camera Rentals</Link>
            <Link fontSize='15px' href={'#'}>Sell Used Equipment</Link>
            <Link fontSize='15px' href={'#'}>Authorized Apple Service</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      
    </Box>
  );
}
export default Footer