import { Child, Product, SignInData, SignUpData, AppContextData} from '../interfaces'
import {createContext, useContext, useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'


const AppContext = createContext({} as AppContextData)

export const useAppProvider = () => useContext(AppContext)

export const AppProvider = ({children}: Child) => {

        const history = useHistory()

        const [catalogue, setCatalogue] = useState<Product[]>([])
        const [cartList, setCartList] = useState<Product[]>([])
        const [error, setError] = useState('')
        const [registerError, setRegisterError] = useState('')
        const [token, setToken] = useState(
        () => localStorage.getItem("token") || ""
        );
        
        const id = localStorage.getItem("userId")

    const signIn = (userData: SignInData) => {
        
        axios.post("https://json-server-hamburgeria-kenzie.herokuapp.com/login", userData)
        .then((response) => {
           console.log(response.data.user.cart)
            localStorage.setItem("token", response.data.accessToken);
            localStorage.setItem("userId", response.data.user.id)
            localStorage.setItem("cart", response.data.user.cart)
            
            setToken(response.data.accessToken);

            setCartList(response.data.user.cart)
          
            history.push(`/home/${response.data.user.id}`);
        })
        .catch((err) => setError(err));

    };

    const signUp = (registerData: SignUpData) => {
        axios.post("https://json-server-hamburgeria-kenzie.herokuapp.com/users", registerData)
        .then((resp) => console.log(resp))
        .catch((err) => console.log(err))
    }


        useEffect(() => {
            axios.get("https://json-server-hamburgeria-kenzie.herokuapp.com/home")
            .then((resp) => setCatalogue(resp.data))
        },[catalogue])

        useEffect(() => {
            axios.get(`https://json-server-hamburgeria-kenzie.herokuapp.com/users/${id}`, 
            {headers : {Authorization: `Bearer ${token}`}})
            .then((resp) => {
                setCartList(resp.data.cart)
                localStorage.setItem("cart", JSON.stringify(resp.data.cart))
            })
        },[cartList])

    const addToCart = (item: Product) => {

        const newItem ={
            name: item.name,
            type: item.type,
            img: item.img,
            price: item.price,
            code: Math.floor(Math.random()* (1000000 - 1) + 1),
            quantity: 1
        }

        cartList.push(newItem)

        axios.patch(`https://json-server-hamburgeria-kenzie.herokuapp.com/users/${id}`, 
        {cart: cartList }, {
        headers : {Authorization: `Bearer ${token}`}})
        .then((resp) => localStorage.setItem("cart", JSON.stringify(cartList)))
    }

    const removeToCart = (item: Product) => {
        axios.get(`https://json-server-hamburgeria-kenzie.herokuapp.com/users/${id}`, 
        {headers : {Authorization: `Bearer ${token}`}})
        .then((resp) => setCartList(resp.data.cart))
        

        const result = cartList.filter((elt: Product) => elt !== item)
       
        axios.patch(`https://json-server-hamburgeria-kenzie.herokuapp.com/users/${id}`, {cart: result }, {
            headers : {Authorization: `Bearer ${token}`}}).then((resp) => localStorage.setItem("cart", JSON.stringify(resp.data.cart))) 
        console.log(JSON.parse(localStorage.getItem("cart") || "{}"))
    }
    
    const plus = (index: number) => {
       console.log(localStorage.getItem("cart"))
    }

    const minus = (index: number) => {

    }

    const toRegister = () => history.push("/register")
    const toLogin = () => history.push("/")
    const toHome = () => history.push(`/home/${id}`)
    const toCart = () => history.push("/cart")


    return (
        <AppContext.Provider 
        value={{catalogue, cartList, error, registerError, token, 
        signIn, signUp, addToCart, removeToCart, plus, minus, 
        toRegister, toLogin, toCart, toHome}}
        >
            {children}
        </AppContext.Provider>
    )

   
}

/*last version

    const addToCart = (item: Product) => {

        const newItem ={
            name: item.name,
            type: item.type,
            img: item.img,
            price: item.price,
            code: Math.floor(Math.random()* (1000000 - 1) + 1),
            quantity: 1
        }

        cartList.push(newItem)

        axios.patch(`https://json-server-hamburgeria-kenzie.herokuapp.com/users/${id}`, {cart: cartList }, {
        headers : {Authorization: `Bearer ${token}`}});
    }

    const removeToCart = (item: Product) => {
        axios.get(`https://json-server-hamburgeria-kenzie.herokuapp.com/users/${id}`, 
        {headers : {Authorization: `Bearer ${token}`}})
        .then((resp) => setCartList(resp.data.cart))

        const result = cartList.filter((elt: Product) => elt !== item)
        
       
        axios.patch(`https://json-server-hamburgeria-kenzie.herokuapp.com/users/${id}`, {cart: result }, {
        headers : {Authorization: `Bearer ${token}`}});
    }
    
*/ 