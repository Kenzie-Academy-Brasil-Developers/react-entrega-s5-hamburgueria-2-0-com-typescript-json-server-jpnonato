
import { SignInData } from "../../interfaces"
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { useAppProvider } from "../../provider/appProvider"
import { TextField, Button } from '@material-ui/core'
import { Countainer, Form } from './styles'
import { useHistory} from 'react-router-dom'
import * as yup from 'yup'
import ShoppingBasketOutlinedIcon  from '@material-ui/icons/ShoppingBasketOutlined'
import { toast } from "react-toastify"

const Login = () => {

   const { signIn, toRegister } = useAppProvider()

   const history = useHistory()
  
   const schema = yup.object().shape({
    email: yup.string().required(''),
    password: yup
      .string()
      .required(''),
    
    })

    const { 
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<SignInData>({resolver: yupResolver(schema)})

    const handleForm = (data: SignInData ) => {
        signIn(data)
    }

    return(
        <Countainer>
            <div className='left_div'>
            <section>
                <h1>Burger</h1>
                <h2>Kenzie</h2>
            </section>
            <section className='message'>
                <div>
                <ShoppingBasketOutlinedIcon/>
                </div>
                <p>A vida é como um sanduíche, é preciso recheá-la com os melhores ingredientes.</p>
            </section>
            </div>
            <Form onSubmit={handleSubmit(handleForm)}>
                <section className='header_form'>
                    <h2>Login</h2>
                </section>
                <div className='input_container'>
                    <TextField 
                        label='E-mail'
                        margin='normal'
                        variant='outlined'
                        color='primary'
                        style={{backgroundColor: 'white', borderRadius: '5px'}}
                        {...register('email')}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        fullWidth
                    />          
                    <TextField 
                        label='Senha'
                        type='password'
                        margin='normal'
                        variant='outlined'
                        color='primary'
                        style={{backgroundColor: 'white', borderRadius: '5px'}}
                        {...register('password')}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        fullWidth
                    />          
                    <Button  style={{width:'100%', marginTop: '7px'}} type='submit' variant='contained' color='primary'>
                        Logar
                    </Button>
                    <h3>Crie sua conta para saborear muitas delícias e matar sua fome!</h3>
                    <Button onClick={toRegister} style={{width:'100%', backgroundColor: 'var(--grey-light)', color: 'var(--grey-medium)'}} size="large"  type='submit' variant='contained' color='primary'>
                        cadastrar
                    </Button>
                </div>
            </Form>
        </Countainer>    
    )
}

export default Login