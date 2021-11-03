import styled from "styled-components";
import { green, red, yellow, blue, grey } from '@material-ui/core/colors'

export const Form = styled.form`
       
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 385px;
        width: 90%;
        margin: auto;
        max-width: 375px;
        border-radius: 4px;
        font-family: inter, sans-serif;
        border: ${grey[100]} solid 2px;

        h3{
            color: ${grey[300]};
            font-size: 10px;
        }

        section{
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 12px;
            width: 88%;

            h2{
                font-weight: bold;
                color: ${grey[600]};
            }
           
            a{
                text-decoration:none;
                color: ${grey[300]}
            }
           
      
        }

        .input_container{
            width: 89%;
        }
       
       
    
    @media screen and (min-width: 768px){
        width: 50%;
   
       
        
    }
`

export const Countainer = styled.div`
   
    height: 100vh;
    width: 100vw;
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: calc(10px + 2vmin);

   
    .left_div{
        margin-top: 25px;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 60%;

        section{
            display:flex;
            height: 53px;
            justify-content: center;
            align-items: center;
            width: 50%;

            p{
                color: var(--grey-medium);
                font-size:10px;
                margin: 0;
                width: 70%;
                text-align: initial;
            }

            h1{
                color: var(--grey-dark);
                margin-right: 5px;
            }
            h2{
                color: var(--secondary);
            }
            div{
                height: 65%;
                width: 13%;
                margin-right: 12px;
                background-color: #e4f3e4;
                color: green;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 5px;
            }
        
        }
        .message{
            border: var(--grey-light) solid 1px;
            border-radius: 4px;
            width: 252px;
        }
    }
    
    @media screen and (min-width: 768px){

        height: 100vh;
        width: 95vw;
        max-width: 880px;
        flex-direction: row;

        .header_form{
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 12px;
            width: 88%;
        }
        
    

        .left_div{
            margin-top: 0;
            
        }

        section{
            display:flex;
            height: 53px;
            justify-content: center;
            align-items: center;
            width: 50%
        }

        
    } 
   
`