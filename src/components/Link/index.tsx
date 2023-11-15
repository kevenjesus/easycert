import { LinkStyle } from "./Link.style";

interface LinkTypes {
    text: string
}


const Link = ({text}: LinkTypes)=> {
    return(

        <LinkStyle>{text}</LinkStyle>

    )
}

export default Link