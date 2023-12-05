import { ButtonHTMLAttributes } from "react"
import { ButtonStyle } from "./Button.style"

export interface ButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    loading: string
    
    
} 




const Button = ({text, ...rest}: ButtonTypes)=> {
  
    return(
        <>
        <ButtonStyle {...rest}>
            {text}
            
        </ButtonStyle>
       
        </>
      
    )
}

export default Button