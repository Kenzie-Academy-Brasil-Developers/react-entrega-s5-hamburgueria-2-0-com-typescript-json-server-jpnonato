
import ShoppingBasketOutlinedIcon  from '@material-ui/icons/ShoppingBasketOutlined'
import { TextField, Button } from '@material-ui/core'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { useHistory, Link } from 'react-router-dom'
import { RegisterData } from '../../interfaces'
import { useAppProvider } from '../../provider/appProvider'
import { Countainer, Form } from './styles'


import * as yup from 'yup'

const Register = () => {

  const history = useHistory()

  const {signUp, registerError} = useAppProvider()

  const schema = yup.object().shape({
    
      email: yup.string().email("Email inválido*").required("Campo obrigatório*"),
      password: yup.string().required("Campo obrigatório*").min(6, "Mínimo de 6 dígitos*"),
      confirm_password: yup.string().required("Você deve confirmar sua senha!").oneOf([yup.ref("password")], "Senha não confere com a senha criada acima!")
        
    })

  const { 
      register,
      handleSubmit,
      formState: {errors}
  } = useForm({resolver: yupResolver(schema)})

  const handleForm = (data: RegisterData) => {

      const registerData = {
          email: data.email,
          password: data.password,
          cart: []
      }
      signUp(registerData)
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
            <h2>Cadastro</h2>
            <Link to="/">Retornar para o login</Link>
          </section>
          <div className='input_container'>
            <TextField 
                label='Nome'
                type='text'
                margin='normal'
                variant="outlined"
                color='primary'
                style={{marginTop: '8px', borderRadius: '5px'}}
                {...register('name')}
                error={!!errors.name}
                helperText={errors.name?.message}
                fullWidth
              /> 
              <TextField 
                label='E-mail'
                type='text'
                margin='normal'
                variant="outlined"
                color='primary'
                style={{marginTop: '8px', borderRadius: '5px'}}
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
                fullWidth
              /> 
              <TextField 
                label='Senha'
                type='password'
                margin='normal'
                variant="outlined"
                color='primary'
                style={{marginTop: '8px', borderRadius: '5px'}}
                {...register('password')}
                error={!!errors.password}
                helperText={errors.password?.message}
                fullWidth
              />      
              <TextField 
                label='Confirmar senha'
                type='password'
                margin='normal'
                variant="outlined"
                color='primary'
                fullWidth
                style={{marginTop: '8px', borderRadius: '5px'}}
                {...register('confirm_password')}
                error={!!errors.confirm_password}
                helperText={errors.confirm_password?.message}
              />      
        </div>        
          <Button style={{width:'90%', marginTop: '7px'}} size="large"  type='submit' variant='contained' color='primary'>
              cadastrar
          </Button>
      </Form>
    </Countainer>
      
  )
}

export default Register