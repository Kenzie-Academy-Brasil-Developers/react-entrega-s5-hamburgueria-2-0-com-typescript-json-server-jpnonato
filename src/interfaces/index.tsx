import { ReactNode } from "react";


export interface Child {
    children: ReactNode
}

export interface Product{
    name: string,
    type: string,
    img: string,
    price: number
}

export interface SignInData {
   email: string,
   password: string
}

export interface SignUpData{
    email: string,
    password: string
}

export interface AppContextData {
    catalogue: Product[]
    cart: Product[]
    error: string
    registerError: string
    token: string
    signIn: (userData: SignInData) => void
    signUp: (registerData: SignUpData) => void
    addToCart: (item: Product, userId: string) => void

}