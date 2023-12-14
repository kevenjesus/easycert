import { createGlobalStyle } from 'styled-components'
import { Toast } from 'react-toastify/dist/components'
export const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        font-family: 'Inter';
    }

    @media (max-width: 1024px){
        
        .Toastify__toast-container {
            width: 100% !important;
            right: 0 !important;
            top: 0 !important;
            padding: 0 !important;
            margin: 0 !important;
            border: none !important;
            border-radius: none !important;
        }

    }

 

  
`

