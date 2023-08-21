import React, { useContext, useState } from 'react';
import image1 from './../../../assets/Login/login.svg'
import { Link, useNavigate } from 'react-router-dom';
import GoogleSignIn from '../GoogleSignIn/GoogleSignIn';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const SignUp = () => {
  const {register,handleSubmit,formState:{errors}} = useForm();
  const {createUser,updateUser} = useContext(AuthContext);
  const [singUpError,setSignUpError] = useState('');
  const [createdUserEmail, setCreatedUserEmail] = useState('')
  const navigate = useNavigate();


  const handleSignUp = (data) => {
    setSignUpError('');
    createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                navigate('/');
                updateUser(userInfo)
                    .then(() => {
                        
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            });
  }
  return (
    <div className='py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 grid-cols-1 grid md:grid-cols-2 '>
      <img className=' hidden md:grid ' src={image1} alt="" />
      <section className=" dark:bg-gray-900">
        
  <div className="flex flex-col items-center  px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
              </h1>
              <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                      <input type="text" {...register("name",{ required: "Name is required"})}  name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sadat Khan" required=""/>
                      {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                  </div>
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" {...register("email", {required: true})} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required=""/>
                      {errors.email && <p className='text-red-500'>{errors.name.message}</p>}
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" {...register("password",{
                        required: "Password is required",
                        minLength:{value: 6, message : " Password must be 6 characters long"},
                        pattern:{value: /(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])/ ,message: "Password must be included upper letter,number and special character"}
                      })} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                      
                      {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}

                  </div>
                
                  <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div className="ml-3 text-sm">
                        <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</Link></label>
                      </div>
                  </div>
                  <button type="submit" className="w-full text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  {singUpError && <p className='text-red-600 P-4'>{singUpError}</p>}
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <Link to='/login' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                  </p>
              </form>
              <p className='text-center'>Or Sign Up with</p>
          <div className=' grid justify-center pt-2'>
                  <GoogleSignIn></GoogleSignIn>
                  </div>
          </div>
      </div>
  </div>
</section>

     </div> 
  );
};

export default SignUp;