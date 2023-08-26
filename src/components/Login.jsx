import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'

const Login = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} justifyContent={"center"} alignItems={"center"}>
        <form>
            <VStack w={"50%"} alignItems={"center"} h={"100vh"} justifyContent={"center"} m={"auto"} spacing={"10px"}> 
                    <Heading textTransform={"uppercase"} pb={"20px"}>Welcome BAck!</Heading>
                <Input placeholder={"Enter Email"} type={"email"} required focusBorderColor={"purple"}></Input>
                <Input placeholder={"Enter Password"} type={"password"} required focusBorderColor={"purple"}></Input>
                <Button alignSelf={"flex-end"} variant={"link"}>Forget Password?</Button>
                <Button colorScheme='purple' width={"100%"}>Login</Button>
            </VStack>
        </form>
    </Container>
  )
}

export default Login