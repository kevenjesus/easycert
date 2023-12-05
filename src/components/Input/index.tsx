import { ChangeEvent, InputHTMLAttributes } from "react"
import { HelpText, InputConatiner, InputStyle } from "./Input.style"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
   error?: boolean
   helpText?: string
}



const Input = ({error, helpText, ...rest}: InputProps)=> {
    return(
        <InputConatiner>
            <InputStyle error={error} {...rest} />
            {error && <HelpText>{helpText}</HelpText>}
        </InputConatiner>
    )
}

export default Input