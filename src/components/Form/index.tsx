import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Button from "../Button"
import Input from "../Input"
import Link from "../Link"
import { Container, ContainerInput } from "./Form.style"
import { ChangeEvent, useState } from "react"
import EasyCert from '../../assets/images/EasyCert.png'
import { json, text } from "stream/consumers"
import userEvent from "@testing-library/user-event"
import { Logo } from './Form.style';

interface fetchLoginData {
    email: string
    password: string
}


const  Form = ()=> {
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)
    const [loading, setLoading] = useState(false)
   

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
    
    

    const cleanForm = ()=> {
        setEmail('')
        setpassword('')
        setLoading(false)
    }
    
    const fetchLogin = async (data:fetchLoginData) =>{
    
        try{
            await fetch('https://jsonplaceholder.typicode.com/todoos/1')
            .then(response => response.json())
            .then(json => console.log(json))
            toast.success('Login efetuado com sucesso')

        }catch(error){
            console.log('Fudeu')
            toast.error('Ops! Acesso negado!')
            
        }finally{
            cleanForm()
            console.log('oiiiiiiii')
        }

    }    

    const onSubmit = () => {
        if(validateForm()) {
            setLoading(true)
            setTimeout(()=> fetchLogin({email, password}), 2000)
           
            
        }else{
            
        }
    }

    

    return (
    <>
        <Logo src={EasyCert} alt="" />
        <Container>
           
            <ContainerInput>
                <Input placeholder="email" error={errorEmail} helpText="Preencha o campo Email" type="text" onChange={changeEmail} value={email}  />
                <Input placeholder="Senha" error={errorPassword} helpText="Preencha o campo Senha" type="password" onChange={changePassword} value={password} />
                <Link text="Esqueceu sua senha?"/>
            </ContainerInput>
            <Button text='Entrar' loadingText="Entrando..." loading={loading} onClick={onSubmit}></Button>
            <br />
            <p>Ainda não possui uma conta?</p>
            <br />
            <Link text="Crie uma conta grátis"/>
        </Container>
    
    
    
    </>
    )
}

export default Form