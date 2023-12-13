import { ButtonHTMLAttributes } from "react"
import { ButtonStyle } from "./Button.style"

export interface ButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    loadingText: string
    loading?: boolean
    
} 

const Button = ({text, loadingText, loading, ...rest}: ButtonTypes)=> {
  
    return(
        <>
        <ButtonStyle {...rest} loading={loading}>
            {loading  ? loadingText : text }
        </ButtonStyle>
       
        </>
      
    )
}

export default Button