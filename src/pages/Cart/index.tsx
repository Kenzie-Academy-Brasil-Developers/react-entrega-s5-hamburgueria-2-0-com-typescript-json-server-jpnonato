import { useAppProvider } from "../../provider/appProvider"
import { ProductDisplay, ListContainer, Mark, InputSearch, Container }from "./styles"
import { useHistory, useParams } from "react-router"
import { Product } from "../../interfaces"
import { string } from "yup/lib/locale"
import { useState } from 'react'

import AppBar from '@material-ui/core/AppBar';
import {  Button } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { styled } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import InputTwoToneIcon from '@material-ui/icons/InputTwoTone';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CountertopsOutlined } from "@mui/icons-material"


const Cart = () => {


    const{cartList, token, removeToCart, removeAll, toHome, toLogin} = useAppProvider()

    const history = useHistory()

    if(token === ""){
        history.push("/")
    }
    
    
    const [typedText, setTypedText] = useState<String>('')
   
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -3,
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
    }));
    
    console.log(cartList)

    return (
        <div>
            <nav>
                <Box>
                <AppBar position="static" style={{width: '100vw', backgroundColor: 'var(--grey-white)'}}>
                        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <Mark>
                                <h1>Burger</h1>
                                <h2>Kenzie</h2>
                            </Mark>
                            <section style={{display: "flex", alignItems: "center"}}>
                            <InputSearch type='text' 
                            onChange={(e) => setTypedText(e.target.value)}
                            style={{fontFamily: "Arial, FontAwesome", border: "grey solid 1px", borderRadius: "3px", fontSize: "18px"}}
                            placeholder="&#xF002; Pesquisar..."
                            />
                            <IconButton  onClick={toHome}>
                                <HomeIcon sx={{ color: 'var(--grey-light)', width: '30px', height:'30px' }} />
                            </IconButton>
                            <IconButton onClick={toLogin}>
                                <label style={{color: 'white' , 
                                display: 'flex', alignItems: 'center', 
                                fontSize: '70%', cursor: 'pointer'}}
                                >
                                <InputTwoToneIcon sx={{ color: 'var(--grey-light)', width: '30px', height:'30px' }} />
                                </label>
                            </IconButton>
                            </section>
                        </Toolbar>
                    </AppBar>
                </Box>
            </nav>
            <Container>
                <div className='buttons'>
                    <Button onClick={removeAll} variant='contained' color='secondary'>
                        Limpar o carrinho
                    </Button>
                    <Button variant='contained' color='primary'>
                        Finalizar compra
                    </Button>
                    <p style={{color: "black"}}> Valor Total: R$ <strong style={{color: "var(--primary)"}}>{`${cartList.reduce((s,a) => a.price + s, 0)}`}</strong></p>
                </div>
                <ListContainer>
                <div className="list_container">
                {
                    cartList.filter((elt) => {

                        if(typedText === ''){
                            return cartList
                        } 

                        return elt.name.toLowerCase() === typedText.toLowerCase()
                        
                    }).map((elt: Product, index: number) => {
                        return(
                            <ProductDisplay key={index}>
                                <img src={elt.img} alt={elt.name}/>
                                <h3>{elt.name}</h3>
                                <h4>{elt.type}</h4>
                                <h4>{elt.price}</h4>
                                <h4>{elt.quantity}</h4>
                                <Button onClick={() => removeToCart(elt)} 
                                variant='contained' color='error'
                                >
                                    Remover
                                </Button>
                            </ProductDisplay> 
                        ) 
                    })                
                }
                </div>
                </ListContainer>
            </Container>
        </div>
    )
}

export default  Cart
