import React from 'react'
import {Box, Image,Text} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { SigninPopover } from './signinPopover';
import ProductButton from './product_button';

import { HamburgerForMobileNavbar } from './hamburgerforMobileNavbar';
import { Icon } from '@iconify/react';
import "./navbar.css";


const Navbar = () => {
  return (
    <>
    <Box position={['fixed']} zIndex={['27']}  width={['100%']} height={['110px']} bg={['rgb(0,63,127)']} display={['none','none','flex',"flex"]}>
      {/* <Box borderBottom={['0.5px solid grey']} w={['100%']} h={['85%']} display={['none','none','flex',"flex"]}> */}
        <Box   h={['100%']} width={["","20%","20%",'50%']} display="flex" justifyContent={['start']}>
          <Link to="/">
          <Icon icon="ic:baseline-camera" color="white" width="100"/>
          </Link>
          <Link to="/"><Text fontSize={['6xl']} fontFamily={['cursive']} color={['#fff']}>PEXARO</Text></Link>

          
        </Box>
        <Box   pl={["10%"]} h={['100%']} width={["","100%","100%",'50%']} display={['flex']}  alignItems={['center']} justifyContent={['space-around']}> 
          <ProductButton/>
          {/* <BrandButton/>
          <DealButton/> */}
          
          <SigninPopover />
          <Box  w={['7%']} h={['50%']}> 
          <Link to='/cart'>
              <Image src='https://i.postimg.cc/BnwcxWds/baseline-shopping-cart-white-24dp.png'm={'0px'} h={['fit-content']}w={['fit-content']}/>
          </Link>
          </Box>
        </Box>
      </Box>
    <HamburgerForMobileNavbar/>
    </>
    )
}

export default Navbar