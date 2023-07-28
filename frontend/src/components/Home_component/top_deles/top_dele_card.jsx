import {
  ChakraProvider,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Center,
  Image,
  Stack,
  Text,
  ButtonGroup,
  Divider,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link} from "react-router-dom";
export default function DealCard({ dimage, dname, dprice,rating,reviews }) {
  return (
    
    <Card maxW="xs" width="300px" overflow='hidden' cursor="pointer">
      <CardBody> 
        <Image 
          src={dimage}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          alignItems={"center"}
          pl={'12%'}
        />
        <Stack mt="6" spacing="6">
        <Link to='/details'><Heading size="md">{dname}</Heading> </Link>
          <Box display='flex' mt='2' alignItems='center' textAlign='center' pl={"20%"}>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < rating ? '#FEA82D' : 'gray.300'}
                  />
                  ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {reviews} reviews
            </Box>
          </Box>
          <Text color="blue.600" fontSize="lg" >
            Final Price:${dprice}
            </Text>
        </Stack>
      </CardBody>
      <Divider />
  <CardFooter >
    {/* <ButtonGroup spacing='2'> */}
      {/* <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button> */}
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    {/* </ButtonGroup> */}
  </CardFooter>
    </Card>
   
    
  );
}
