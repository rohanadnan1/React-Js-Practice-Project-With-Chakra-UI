import { VStack, Box, Heading } from '@chakra-ui/react'
import React from 'react'

const styles ={
    fontSize: "1vw",
    fontWeight: "600",
    color: "white"
}

const Footer = () => {
  return (
        <VStack
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"20px"}
        h={"30vh"}
        bgColor={"black"}
        >
            <Heading 
            textTransform={"uppercase"}
            borderBottom={"2px solid"}
            color={"white"}
            >Follow Me on Github </Heading>
            <a href='https://github.com/rohanadnan1' target='blank' style={styles}>rohanadnan1</a>
        </VStack>

  )
}

export default Footer