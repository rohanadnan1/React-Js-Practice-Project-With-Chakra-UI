import React from 'react'
import { Carousel } from "react-responsive-carousel"
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3(3).jpg";
import img4 from "../assets/4(1).jpg";
import img5 from "../assets/5.png";
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import "react-responsive-carousel/lib/styles/carousel.min.css"

const headingOptions = {
    pos: "absolute",
    left:"30%",
    top:"7%",
    fontSize: "1vw",
    padding: "20px",
    textTransform: "uppercase",
    width: "40vw",
    borderRadius: "20px",
    letterSpacing: "7px"
}

const Home = () => {
  return (
   <Box >
    <MyCarousel/>

    <Container h={"fit-content"}  maxW={'container.xl'}>
    <Heading
    margin={"auto"}
    w={"fit-content"}
    borderBottom={"2px solid"}
    pt={10}
    textTransform={"uppercase"}
    id='#services'
    >Services</Heading>
    <Stack
    m={"80px"}
    alignItems={"center"}
    flexDirection={"row"}
    >

    <Image src={img5} w={"17vw"} />
    <Text
     textAlign={"center"}
    letterSpacing={"3px"}
    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo inventore officia modi dignissimos voluptas a illo odit voluptatem, cum accusamus, ullam commodi dolores sequi ex totam eligendi saepe facere distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nesciunt saepe inventore obcaecati. Quam doloremque sapiente optio quasi. Natus obcaecati tenetur fuga voluptates nemo ab aut, minus minima distinctio sunt at, totam vitae rerum corrupti excepturi architecto. Cumque culpa doloribus, voluptate ab nihil blanditiis ipsam illum fugiat veritatis dicta? Nisi ratione blanditiis asperiores est itaque reiciendis iste labore! Facere, unde distinctio id nobis repudiandae vitae.</Text>

    </Stack>
    </Container>
   </Box>
  )
}

export default Home


const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop showArrows={false} showThumbs={false} showStatus={false}  interval={1000}>
        <Box w={"full"} h={"100vh"} >
            <Image src={img1}/>
            <Heading color={"white"} bgColor={"black"}  {...headingOptions}>The future is here</Heading>
        </Box>
        <Box w={"100vw"} h={"100vh"} >
            <Image src={img2}/>
            <Heading color={"white"} bgColor={"black"}  {...headingOptions}>Gaming is future</Heading>
        </Box>
        <Box w={"100vw"} h={"100vh"} >
            <Image src={img3}/>
            <Heading color={"white"} bgColor={"black"}  {...headingOptions}>Build your gaming career</Heading>
        </Box>
        <Box w={"100vw"} h={"100vh"} >
            <Image src={img4}/>
            {/* <Heading color={"blackAlpha.600"}  {...headingOptions}>Gaming is future</Heading> */}
        </Box>
    </Carousel>
)