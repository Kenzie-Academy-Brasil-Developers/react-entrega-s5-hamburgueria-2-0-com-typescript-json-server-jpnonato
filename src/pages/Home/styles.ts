import styled from 'styled-components'

export const ProductDisplay = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 220px;
    height: 220px;
    border-radius: 4px;
    border: var(--grey-light) solid 2px;
    color: var(--grey-dark);
    margin: 5px 5px 5px 5px;


    img{
        width: 35%;
        height: 45%;
    }

    h3{
        font-size: 12px;
        font-weight: bold;
        margin: 5px;
    }

    h4{
        font-size: 8.5px;
        margin: 5px;
        color: var(--primary);
    }

    h5{
        font-size: 8.5px;
        margin: 5px;
        color: var(--grey-medium);
    }

    :hover{
        border: var(--primary) solid 2px;
    }

    

    
    @media screen and (min-width: 750px){
        width: 250px;
        height: 250px;

       
        
        img{
            width: 40%;
            height: 50%;
        }
        
       
    }
`

export const ListContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 15px;

    

    @media screen and (min-width: 750px){
        flex-direction: row;
        flex-wrap: wrap;
       
        .list_container{
            width: 58%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            max-width: 850px;
        }
        img{
            width: 40%;
            height: 50%;
        }
        
       
    }
`

export const Mark = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    h1{
        color: var(--grey-dark);
        margin-right: 5px;
    }
    h2{
        color: var(--secondary);
    }
`


export const InputSearch = styled.input`

    display: none;
    @media screen and (min-width: 600px){ 
        display: inline-block;
    }
`