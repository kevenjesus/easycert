import { InputStyle } from "./Input.style"

export interface InputProps{
    placeholder?: string;
}

const Input = ({placeholder = ''})=> {
    return(
        <InputStyle placeholder={placeholder} />
    )
}

export default Input