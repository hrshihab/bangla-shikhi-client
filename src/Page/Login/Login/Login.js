import React, { useContext, useState } from 'react';
import image1 from './../../../assets/Login/login.svg'
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider';

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const [loginUserEmail, setLoginUserEmail] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  useTitle('Login ')

  const from = location.state?.from?.pathname || '/';


  const handleLogin = data => {
    console.log(data);
    setLoginError('');
    signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setLoginUserEmail(data.email);
            navigate(from, { replace: true });
        })
        .catch(error => {
            console.log(error.message)
            setLoginError(error.message);
        });
}
  return (
    <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 grid-cols-1 grid md:grid-cols-2 '>
      <img className=' hidden md:grid ' src={image1} alt="" />
      <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={handleSubmit(handleLogin)} class="space-y-6" action="#">
              <h5 class="text-2xl font-medium text-gray-900 dark:text-white text-center">Sign in</h5>
              <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" {...register("email", {required: true})} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required=""/>
                      {errors.email && <p className='text-red-500'>{errors.name.message}</p>}
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" {...register("password",{
                        required: "Password is required",
                        minLength:{value: 6, message : " Password must be 6 characters or longer"}
                      })} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                      
                      {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}

                  </div>
              <div class="flex items-start">
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                          <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                      </div>
                      <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                  </div>
                  <Link to="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</Link>
              </div>
              <button type="submit" class="w-full text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
              <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
              <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered? <Link to="/signup" class="text-blue-700 hover:underline dark:text-orange-500">Create account</Link>
              </div>
              
          </form>
          <p className='text-center p-4'>Or Sign in with</p>
          <div className=' grid justify-center pt-2'>
                  <GoogleSignIn></GoogleSignIn>
                  </div>
      </div>
    </div>  

  );
};

export default Login;