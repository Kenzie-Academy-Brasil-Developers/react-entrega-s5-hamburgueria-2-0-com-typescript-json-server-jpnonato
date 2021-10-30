import styled from 'styled-components'

export const ProductDisplay = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 310px;
    height: 300px;
    background-color: beige;
    border-radius: 4px;
    border: none;
    color: tomato;
    margin: 5px 5px 5px 5px;


    img{
        width: 34%;
        height: 67%;
    }

    h3{
        font-size: 12px;
        font-weight: bold;
    }

    h4{
        font-size: 8.5px;
    }

    

    
    @media screen and (min-width: 750px){
        width: 357px;
        height: 300px;

       
        
        img{
            width: 40%;
            height: 50%;
        }
        
       
    }
`