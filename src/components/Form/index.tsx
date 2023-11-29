import Button from "../Button"
import Input from "../Input"
import Link from "../Link"
import { Container, ContainerInput } from "./Form.style"
import { ChangeEvent, useState } from "react"

const  Form = ()=> {
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')

    const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setEmail(value)
    }
    const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setpassword(value)
    }

    return (
        <Container>
            <ContainerInput>
                <Input placeholder="email" type="text" onChange={changeEmail} value={email}  />
                <Input placeholder="Senha" type="password" onChange={changePassword} value={password} />
                <Link text="Esqueceu sua senha?"/>
            </ContainerInput>
            <Button text="Entrar"></Button>
            <br />
            <p>Ainda não possui uma conta?</p>
            <br />
            <Link text="Crie uma conta grátis"/>
            
        </Container>
    )
}

export default Form