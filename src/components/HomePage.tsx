import React, { useContext } from 'react'
import QuizComponent from './QuizComponent'
import { LoginContext } from '../contexts/login-context'
import Cookies from 'js-cookie'


const HomePage = () => {

  const { setPseudo } = useContext(LoginContext)!
  const pseudo = Cookies.get('pseudo')

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    const pseudo = e.currentTarget.elements.namedItem('pseudo') as HTMLInputElement
    Cookies.set('pseudo', pseudo.value, { expires: 1 })
    setPseudo(pseudo.value)
  }

  return (
    <div>
      {
        pseudo ?
          <QuizComponent />
          :
          <form className="flex flex-col justify-center pt-10 items-center" onSubmit={handleLogin}>
            <label className="input input-bordered flex items-center gap-2 w-80" >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
              <input
                name="pseudo"
                type="text"
                className="grow"
                placeholder="Select pseudo..."
                defaultValue={pseudo}
              />
            </label>
            <button type="submit" className="btn w-20 mt-5 bg-emerald-900">Go!</button>
          </form>

      }
    </div>
  )
}

export default HomePage
