import { ButtonStyle } from "./Button.style"

export interface ButtonTypes {
    text: string
} 

const Button = ({text}: ButtonTypes)=> {
    return(
        <ButtonStyle>
            {text}
        </ButtonStyle>
    )
}

export default Button