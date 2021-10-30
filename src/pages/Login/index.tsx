
import { SignInData } from "../../interfaces"
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { useAppProvider } from "../../provider/appProvider"
import { TextField, Button } from '@material-ui/core'
import * as yup from 'yup'

const Login = () => {

   const {error, token, signIn} = useAppProvider()

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
        <form onSubmit={handleSubmit(handleForm)}>
            <div className='input'>
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
            </div>
            <div className='input'>
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
            </div>
            <div className='buttons'>
                <Button size="large"  type='submit' variant='contained' color='primary'>
                    Login
                </Button>
                <p style={{color: 'red'}}>{ typeof error === "object" ? 'E-mail e/ou senha inválidos*' : '' }</p>
            </div>
        </form>
    )
}

export default Login