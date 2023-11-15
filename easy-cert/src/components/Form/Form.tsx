import Button from "../Button"
import Input from "../Input"
import Link from "../Link"
import CreateAnAccount from "../CreateAnAccount"
import RegistrationLink from "../RegistrationLink"
import {Container, ContainerInput } from "./Form.style"



const  Form = ()=> {
    return (
        <Container>
            <ContainerInput>
                <Input placeholder="Email"/>
                <Input placeholder="Senha"/>
                <Link/>
            </ContainerInput>
            <Button></Button>
            <RegistrationLink/>
            <CreateAnAccount/>
            
        </Container>
    )
}

export default Form