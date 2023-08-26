import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react'
import {BiCloudUpload} from "react-icons/bi"
import React from 'react'

const Upload = () => {
  return (
   <Container maxW={"container.xl"} display={"flex"} justifyContent={"center"} alignItems={"center"} h={"100vh"} flexDirection={"column"}>

    <VStack>
    <BiCloudUpload size={"20vw"} color={"#4caf50"}/>
    </VStack>
    <HStack>
        <Input type='file' required css={{
            '&::file-selector-button':{
                border: "none",
                width: 'calc(100% + 36px)',
                height: "100%",
                marginLeft:"-18px",
                cursor:"pointer"
            }
        }
        }></Input>
        <Button colorScheme={'green'} variant={"solid"}>Submit</Button>
    </HStack>
   </Container>
  )
}

export default Upload