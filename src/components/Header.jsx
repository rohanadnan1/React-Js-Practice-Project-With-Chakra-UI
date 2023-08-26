import React from 'react'
import {Drawer, DrawerBody,DrawerHeader, DrawerOverlay,DrawerCloseButton,DrawerContent,Button, useDisclosure, VStack, HStack} from "@chakra-ui/react"
import {BiMenu} from "react-icons/bi"
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link"

const Header = () => {

    const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
    <Button 
    m={3}
    h={50}
    w={50}
    borderRadius={'full'}
    colorScheme={'purple'}
    color={'white'}
    onClick={onOpen}
    zIndex={10}
    pos={"fixed"}
    >
        
        <BiMenu size={"40"}/>
    </Button>

    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay/>

       <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader
            fontFamily={"gilroy"}
            >VIDEOS HUB</DrawerHeader>
            <DrawerBody>
                <VStack 
                alignItems={"flex-start"} colorScheme={"purple"}
                >
                    <Button  onClick={onClose}colorScheme={"purple"}>
                        <Link to={"/"}>Home</Link>
                    </Button>
                    <Button onClick={onClose} colorScheme={"purple"} marginTop={3}>
                        <Link to={"/videos"}>Videos</Link>
                    </Button>
                    <Button onClick={onClose} colorScheme={"purple"} marginTop={3}>
                        <Link to={"/videos?category=free"}>Free Videos</Link>
                    </Button>
                    <Button onClick={onClose} colorScheme={"purple"} marginTop={3}>
                        <Link to={"/upload"}>Upload Video</Link>
                    </Button>
                </VStack>

                <HStack pos={"absolute"} bottom={10} left={0} width={"full"} justifyContent={"space-evenly"}>
                    <Button onClick={onClose} colorScheme={'purple'}>
                        <Link to={"/login"}>Log In</Link>
                    </Button>
                    <Button onClick={onClose} colorScheme={"purple"} variant={"outline"} >
                        <Link to={"/signup"}>Sign Up</Link>
                    </Button>
                </HStack>
            </DrawerBody>
       </DrawerContent>
    </Drawer>
    
    
    </>
  )
}

export default Header