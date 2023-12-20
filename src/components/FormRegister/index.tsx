import { FormRegisterStyle } from "./FormRegister.style"
import { Container, ContainerInput, Logo } from "../Form/Form.style"
import Input from "../Input"
import Button from "../Button"
import Link from "../Link"
import EasyCert from "../../assets/images/EasyCert.png"
import { ChangeEvent, useState } from "react"

const FormResgister = ()=> {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const [errorName, setErrorName] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPhone, setErrorPhone] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [errorRepeatPassword, setErrorRepeatPassword] = useState(false)
    

    const isValidName = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        console.log(value)
        setName(value.trim())

    }

    const isValidEmail = (event: ChangeEvent<HTMLInputElement>)=> {
        const value = event.target.value
        setEmail(value.trim())
    }

    const isValidPhone = (event: ChangeEvent<HTMLInputElement>)=> {
        const value = event.target.value
        setPhone(value.trim())
    }

    const isValidPassword = (event: ChangeEvent<HTMLInputElement>)=> {
        const value = event.target.value 
        setPassword(value.trim())
    }

    const isValidRepeatPassword = (event: ChangeEvent<HTMLInputElement>)=> {
        const value = event.target.value
        setRepeatPassword(value.trim())
    }

    const validateFormRegister = ()=> {
        
        if(name === '' && name.length < 2){
            setErrorName(true)
        }
        if(email === ''){
            setErrorEmail(true)
        }
        if(phone === ''){
            setErrorPhone(true)
        }
        if(password === ''){
            setErrorPassword(true)
        }
        if(repeatPassword === ''){
            setErrorRepeatPassword(true)
        }

    }

    const clearFormRegister = ()=> {
        setName('')
        setEmail('')
        setPhone('')
        setPassword('')
        setRepeatPassword('')
    }

    const onSubmitFormRegister = ()=> {
        
    }



    return(
        <>
                <Logo src={EasyCert} alt=""></Logo>
                <FormRegisterStyle>
                    <Container>
                        <ContainerInput>
                            <Input placeholder="Nome" type="text" error={errorName} helpText="Campo nome é obrigatório"  onChange={isValidName} value={name}></Input>
                            <Input placeholder="Email" type="text" error={errorEmail} helpText="Informe um email valido" onChange={isValidEmail} value={email}></Input>
                            <Input placeholder="Telefone" type="text" error={errorPhone} helpText="Campo telefone é obrigatório" onChange={isValidPhone} value={phone}></Input>
                            <Input placeholder="Senha" type="text" error={errorPassword} helpText="A senha deve conter pelo menos 6 caracteres" onChange={isValidPassword} value={password}></Input>
                            <Input placeholder="Repetir senha" type="text" error={errorRepeatPassword} helpText="As senhas não são compativeis" onChange={isValidRepeatPassword} value={repeatPassword}></Input>
                        </ContainerInput>
                        <Button text="Cadastrar" loadingText="Cadastrando..." onClick={validateFormRegister}></Button>
                        <br />
                            <p>Já possui cadastro?</p>
                        <br />
                        <Link text="Faça Login"></Link>
                    </Container>
                </FormRegisterStyle>
        </>
    )
}

export default FormResgister