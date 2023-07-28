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
export default function Cat_card({ image, name }) {
  return (
    <Card maxW="xs" borderRadius={'3xl'} overflow='hidden' cursor="pointer">
      <CardBody bg='#003774'>
        <Image
          src={image}
          alt="Green double couch with wooden legs"
        />
        <Stack  spacing="3">
          <Heading size="md" color={'#fff'}>{name}</Heading>
          {/* <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text> */}
        </Stack>
      </CardBody>
    </Card>
  );
}
