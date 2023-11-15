import { ButtonStyle } from "./Button.style"

interface ButtonTypes {
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