import { useAppProvider } from "../../provider/appProvider"
import { useHistory, useParams } from "react-router"
import { ProductDisplay, ListContainer, Mark, InputSearch }from "./styles"
import { useState } from "react"

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



const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: 'none',
      color: 'var(--grey-white)',

      padding: '0 4px',
    },
}));

const Home = () => {

    const history = useHistory()

    const{catalogue, addToCart, cartList, toCart, toLogin} = useAppProvider()

    const [typedText, setTypedText] = useState<String>('')

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
                            <IconButton  onClick={toCart}>
                                <StyledBadge badgeContent={cartList.length} 
                                color="primary" style={{ marginRight: '12px'}}
                                >
                                    <ShoppingCartIcon sx={{ color: 'var(--grey-light)', width: '30px', height:'30px' }} />
                                </StyledBadge>
                            </IconButton>
                            <IconButton onClick={toLogin}>
                                <label style={{color: 'white' , 
                                display: 'flex', alignItems: 'center', 
                                fontSize: '70%', cursor: 'pointer'}}
                                >
                                <InputTwoToneIcon sx={{ color: 'var(--grey-light)', width: '30px', height:'30px'}} />
                                </label>
                            </IconButton>
                            </section>
                        </Toolbar>
                    </AppBar>
                </Box>
            </nav>
            <ListContainer> 
                <div className="list_container">

                
            {
                catalogue.filter((elt) => {

                    if(typedText === ''){
                        return catalogue
                    } 

                    return elt.name.toLowerCase() === typedText.toLowerCase()
                        
                    }).map((elt, index) => {

                    return(
                        <ProductDisplay key={index}>
                            <img src={elt.img} alt={elt.name}/>
                            <h3>{elt.name}</h3>
                            <h5>{elt.type}</h5>
                            <h4>R$ {elt.price}</h4>
                            <Button onClick={() => addToCart(elt)} 
                            variant='contained' color='primary'
                            >
                              Adicionar
                            </Button>
                        </ProductDisplay>
                    )
                })
            }
            </div> 
            </ListContainer>
        </div>
    )
}

export default Home