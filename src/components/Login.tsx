import { zodResolver } from '@hookform/resolvers/zod';
import axios, { AxiosError} from 'axios';
import { useState } from 'react';
import {FieldValues, useForm} from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {z} from 'zod';
import { login} from '../stores/store';
import { Navigate } from 'react-router-dom';

const schema = z.object({
  username: z.string().min(3, {message:'Username must contain atleast 3 characters'}).max(20),
  password: z.string().min(4, {message:'Password must contain atleast 4 characters'}).max(20)
})
type validForm = z.infer<typeof schema>;

const Login = () => {
  const [credentialError, setCredentialError] = useState('');
  const {register, handleSubmit, formState:{errors}} = useForm<validForm>({resolver:zodResolver(schema)});
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.username);

  if(isLoggedIn){
    dispatch(login(localStorage.username));
    return <Navigate to='/home'/>
  }

  const onSubmission = (data:FieldValues)=>{
    axios.post('https://fakestoreapi.com/auth/login', data)
        .then((res)=>{
          localStorage.username = data.username;
          sessionStorage.jwt = JSON.stringify(res.data);
          dispatch(login(localStorage.username));
          setIsLoggedIn(true);
        })
        .catch((err:AxiosError)=>{
          console.log(err.message);
          setCredentialError('Incorrect username or password');
        });
  }
  
  return (
    <div className="container d-flex min-vh-100 justify-content-center align-items-center">
      <form className="form-container border rounded p-3 w-50" onSubmit={handleSubmit(onSubmission)}>
        <h2 className="text-center">Login</h2>

        <div className="form-group my-2">
          <label htmlFor="username" className="form-label">Username</label>
          <input {...register('username')} type="text" id="username" className="form-control"/>
          {errors.username && <p className='text-danger'>{errors.username.message}</p>}
        </div>

        <div className="form-group my-2">
          <label htmlFor="password" className="form-label">Password</label>
          <input {...register('password')}  type="password" id="password" className="form-control"/>
          {errors.password && <p className='text-danger'>{errors.password.message}</p>}
        </div>
        {credentialError && <p className='text-danger'>{credentialError}</p>}
        <button className="btn btn-primary my-2 w-100">Login</button>

      </form>
    </div>
  );
};

export default Login;
