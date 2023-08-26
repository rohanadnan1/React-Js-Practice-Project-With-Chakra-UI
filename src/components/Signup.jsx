import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'

const Signup = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"}>

        <form>
            <VStack alignItems={"center"} justifyContent={"center"} h={"100vh"} w={"50%"} margin={"auto"} spacing={"10px"}>
                <Heading pb={"20px"}>WELCOME TO MY WEBSITE!</Heading>
                <Input placeHolder={"Enter email"} required type={"email"}></Input>
                <Input placeHolder={"Enter password"} required type={"password"}></Input>
                <Input placeHolder={"Re-Enter Password"} required type={"password"}></Input>
                <Button colorScheme='purple' w={"100%"} >Sign Up</Button>
            </VStack>
        </form>
    </Container>
  )
}

export default Signup