import { Child, Product, SignInData, SignUpData, AppContextData} from '../interfaces'
import {createContext, useContext, useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'


const AppContext = createContext({} as AppContextData)

export const useAppProvider = () => useContext(AppContext)

export const AppProvider = ({children}: Child) => {

    const history = useHistory()

    const [catalogue, setCatalogue] = useState<Product[]>([])
    const [cart, setCart] = useState<Product[]>([])
    const [error, setError] = useState('')
    const [registerError, setRegisterError] = useState('')
    const [token, setToken] = useState(
      () => localStorage.getItem("token") || ""
    );
  

    const signIn = (userData: SignInData) => {
        
        axios.post("https://json-server-hamburgeria-kenzie.herokuapp.com/login", userData)
        .then((response) => {
         
            localStorage.setItem("token", response.data.accessToken);
            
            setToken(response.data.accessToken);
          
            history.push(`/home/${response.data.user.id}`);
        })
        .catch((err) => setError(err));
    };

    const signUp = (registerData: SignUpData) => {
        axios.post("https://json-server-hamburgeria.herokuapp.com/users", registerData)
        .catch((err) => setRegisterError(err))
    }


    useEffect(() => {
        axios.get("https://json-server-hamburgeria.herokuapp.com/home")
        .then((resp) => setCatalogue(resp.data))
    },[])

    const addToCart = (item: Product, userId: string) => {

        const newItem ={
            name: item.name,
            type: item.type,
            img: item.img,
            price: item.price,
            code: Math.floor(Math.random()* (1000000 - 1) + 1),
            userId: userId,
            quantity: 1
        }

        console.log(newItem)

        axios.post("https://json-server-hamburgeria-kenzie.herokuapp.com/cart", newItem)
    }

    useEffect(() => {
        axios.get("https://json-server-hamburgeria.herokuapp.com/cart")
        .then((resp) => setCart(resp.data))
    },[])

    return (
        <AppContext.Provider value={{catalogue, cart, error, registerError, token, signIn, signUp, addToCart}}>
            {children}
        </AppContext.Provider>
    )

   
}