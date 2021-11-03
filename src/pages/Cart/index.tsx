import { useAppProvider } from "../../provider/appProvider"
import { ProductDisplay, ListContainer, Mark }from "./styles"
import { Product } from "../../interfaces"
import { string } from "yup/lib/locale"

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

const Cart = () => {


    const{cartList, removeToCart, plus, minus, toHome, toLogin} = useAppProvider()
    const cart = JSON.parse((localStorage.getItem("cart") || "{}"))
    console.log(cartList)
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          right: -3,
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
    }));
    
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
                            <section>
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
            <ListContainer>
            {
                cartList.map((elt: Product, index: number) => {
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
            </ListContainer>
        </div>
    )
}

export default  Cart