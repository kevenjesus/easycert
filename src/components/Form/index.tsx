import Button from "../Button"
import Input from "../Input"
import Link from "../Link"
import { Container, ContainerInput } from "./Form.style"
import { ChangeEvent, useState } from "react"
import EasyCert from '../../assets/images/EasyCert.png'
import { text } from "stream/consumers"
import userEvent from "@testing-library/user-event"

const  Form = ()=> {
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
  

    const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setEmail(value)
    }
    const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setpassword(value)
    }

    
     
    const validateForm = () => {
        if(email === '') {
            setErrorEmail(true)
            return false
        }else if(email !== '') {
            setErrorEmail(false)
        }

        if(password === '') {
            setErrorPassword(true)
            return false
        }else if(password !== '') {
            setErrorPassword(false)
        }

        return true
    }

    

    const onSubmit = () => {
        if(validateForm()) {
            console.log('manda os dados para backend', {email, password})
        }
    }

  
    return (
        <Container>
            <img src={EasyCert} alt="" />
            <ContainerInput>
                <Input placeholder="email" error={errorEmail} helpText="Preencha o campo Email" type="text" onChange={changeEmail} value={email}  />
                <Input placeholder="Senha" error={errorPassword} helpText="Preencha o campo Senha" type="password" onChange={changePassword} value={password} />
                <Link text="Esqueceu sua senha?"/>
            </ContainerInput>
            <Button text='Entrando' onClick={onSubmit}></Button>
            <br />
            <p>Ainda não possui uma conta?</p>
            <br />
            <Link text="Crie uma conta grátis"/>
            
        </Container>
    )
}

export default Form