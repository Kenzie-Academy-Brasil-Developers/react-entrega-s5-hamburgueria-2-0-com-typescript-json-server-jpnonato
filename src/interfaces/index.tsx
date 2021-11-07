import { ReactNode } from "react";


export interface Child {
    children: ReactNode
}

export interface Product{
    name: string,
    type: string,
    img: string,
    code?:number
    quantity?: number,
    price: number
}

export interface SignInData {
   email: string,
   password: string
}

export interface SignUpData{
    email: string,
    password: string,
    cart: Product[]
}

export interface AppContextData {
    catalogue: Product[]
    cartList: Product[]
    token: string
    signIn: (userData: SignInData) => void
    signUp: (registerData: SignUpData) => void
    addToCart: (item: Product) => void
    removeToCart: (item: Product) => void
    removeAll: () => void
    toRegister: () => void
    toCart:() => void
    toLogin: () => void
    toHome: () => void

}

export interface RegisterData{
    name: string,
    email: string,
    password: string
}