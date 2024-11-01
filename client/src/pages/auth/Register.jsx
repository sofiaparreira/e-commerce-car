import { useState } from "react";
import { Link } from "react-router-dom";


export default function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleRegister = (e) => {
        e.preventDefault()

        try {
            
        } catch (error) {
            
        }
    }


    return (

      <>
    
        <div className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-zinc-900">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=red&shade=700"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
              Create an Account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
            <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-white">
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) = setName(e.target.value)}
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 bg-zinc-900  text-white shadow-sm ring-1 ring-inset ring-zinc-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm/6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-white">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) = setEmail(e.target.value)}
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 bg-zinc-900  text-white shadow-sm ring-1 ring-inset ring-zinc-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm/6 font-medium text-white">
                    Password
                  </label>
                 
                </div>
                <div className="mt-2">
                  <input
                    onChange={(e) = setPassword(e.target.value)}

                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 bg-zinc-900  text-white shadow-sm ring-1 ring-inset ring-zinc-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="space-x-4 text-gray-200">
              <input type="radio" />
                <span>Sou Administrador</span>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-red-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700"
                >
                  Sign Up
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm/6 text-gray-300">
              Já possui uma conta?{'  '}
              <Link to='/login' className="font-semibold text-red-700 hover:text-red-500">
                Login
              </Link>
            </p>
          </div>
        </div>
      </>
    )
  }
  