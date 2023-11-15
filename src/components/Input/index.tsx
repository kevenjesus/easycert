import { ChangeEvent } from "react"
import { InputStyle } from "./Input.style"
export interface InputProps extends HTMLInputElement{
   onChange?: (event: ChangeEvent<HTMLInputElement>) => void
   value: string
}

const Input = ({...props})=> {
    return(
        <InputStyle {...props} />
    )
}

export default Input