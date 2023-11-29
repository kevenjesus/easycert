import { ChangeEvent, InputHTMLAttributes } from "react"
import { HelpText, InputConatiner, InputStyle } from "./Input.style"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
   error?: boolean
   helpText?: string
}

interface PeopleType {
    name: string
    age: number
    height: number
}

interface TeacherType extends PeopleType {
    class: string
    school: string
}

const teacher: TeacherType = {
    class: 'turma A',
    school: 'escola tal',
    name: 'keven',
    age: 30,
    height: 120

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