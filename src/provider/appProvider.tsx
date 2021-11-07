import { Child, Product, SignInData, SignUpData, AppContextData} from '../interfaces'
import {createContext, useContext, useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AppContext = createContext({} as AppContextData)

export const useAppProvider = () => useContext(AppContext)

export const AppProvider = ({children}: Child) => {

        const history = useHistory()

        const [catalogue, setCatalogue] = useState<Product[]>([])
        const [cartList, setCartList] = useState<Product[]>([])
        const [token, setToken] = useState(
        () => localStorage.getItem("token") || ""
        );
        
        const id = localStorage.getItem("userId")

    const signIn = (userData: SignInData) => {
        
        axios.post("https://json-server-hamburgeria-kenzie.herokuapp.com/login", userData)
        .then((response) => {
            localStorage.setItem("token", response.data.accessToken);
            localStorage.setItem("userId", response.data.user.id)
            localStorage.setItem("cart", response.data.user.cart)
            
            setToken(response.data.accessToken);

            setCartList(response.data.user.cart)

            if(cartList.length === 0){
                toast.info("seu carrinho está vazio")
            }
          
            history.push(`/home/${response.data.user.id}`);
        })
        .catch((err) => toast.error('E-mail e/ou senha inválidos!')); 

    };

    const signUp = (registerData: SignUpData) => {
        axios.post("https://json-server-hamburgeria-kenzie.herokuapp.com/users", registerData)
        .then((resp) => {
            toast.success('Conta criada com sucesso!')
            return history.push("/")
        }).catch((err) => toast.error('E-mail já cadastrado!'))
    }


        useEffect(() => {
            axios.get("https://json-server-hamburgeria-kenzie.herokuapp.com/home")
            .then((resp) => setCatalogue(resp.data))
        },[catalogue])

        useEffect(() => {
            axios.get(`https://json-server-hamburgeria-kenzie.herokuapp.com/users/${id}`, 
            {headers : {Authorization: `Bearer ${token}`}})
            .then((resp) => {setCartList(resp.data.cart)})
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
    }

    const removeAll = () => {

        axios.patch(`https://json-server-hamburgeria-kenzie.herokuapp.com/users/${id}`, 
        {cart: []}, {headers : {Authorization: `Bearer ${token}`}})

    }
    
   

    const toRegister = () => history.push("/register")
    const toHome = () => history.push(`/home/${id}`)
    const toCart = () => history.push("/cart")
    const toLogin = () => {
        localStorage.clear()
        history.push("/")
    }


    return (
        <AppContext.Provider 
        value={{catalogue, cartList, token, 
        signIn, signUp, addToCart, removeToCart, removeAll,
        toRegister, toLogin, toCart, toHome}}
        >
            {children}
        </AppContext.Provider>
    )

   
}