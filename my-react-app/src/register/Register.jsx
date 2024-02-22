import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register} from '../state/action/AuthAction'

const RegisterPage= () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [message,setMessage] = useState('')
    const dispatch = useDispatch()
    const userstate = useSelector((state)=> state.register)
    const {userInfo, isRequest, isSuccess} = userstate

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(register({name,email,password}))
        console.log('')
    }


    return (
    <div>
        <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 mr-2" src="https://scontent.fabv2-1.fna.fbcdn.net/v/t39.30808-6/304772524_495077545960919_1272780936733272306_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGQ8wTc2IQ9p9dTSYTjanhyXfoBrb9ktMRd-gGtv2S0xAPEq6-G5hbNrzzV8TC720e3ahbvmKowJX6CxgU3DM0T&_nc_ohc=hW9xixZ5N5QAX9uNOBk&_nc_zt=23&_nc_ht=scontent.fabv2-1.fna&oh=00_AfCIC3quoOkesgmnT3go--4Dqpnpy3-tuvR37pT5WxEqZw&oe=65CEF936" alt="logo"/>
          MediaTech    
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign up to your account
                </h1>
            <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Username</label>
                    <input type="text" value={name} onChange={(e)=> setName(e.target.value)}  name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required="" />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                        </div>
                    </div>
                         <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                         </div>
                        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                        </p>
            </form>
          </div>
      </div>
  </div>
</section>
</div>
  )
}


export default RegisterPage