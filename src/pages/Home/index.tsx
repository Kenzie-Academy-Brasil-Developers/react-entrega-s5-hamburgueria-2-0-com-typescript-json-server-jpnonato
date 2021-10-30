
import { useAppProvider } from "../../provider/appProvider"
import { Product } from "../../interfaces" 
import { useParams } from "react-router"
import { ProductDisplay }from "./styles"

interface ButtonAdd{
    addToCart: (item: Product) => void
}

interface Id{
    id: string
}
const Home = () => {

    const {id} = useParams<Id>()

    console.log(id)

    const{catalogue, addToCart} = useAppProvider()

    return (
        <div>
            {
                catalogue.map((elt) => {

                    return(
                        <ProductDisplay>
                            <img src={elt.img} alt={elt.name}/>
                            <h3>{elt.name}</h3>
                            <h4>{elt.type}</h4>
                            <h4>{elt.price}</h4>
                            <button onClick={() => addToCart(elt, id)}>Adicionar</button>
                        </ProductDisplay>
                    )
                })
            }
        </div>
    )
}

export default Home