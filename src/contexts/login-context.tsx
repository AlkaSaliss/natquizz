import { createContext, useState, ReactNode } from "react"

interface LoginContextType {
  pseudo: string
  setPseudo: React.Dispatch<React.SetStateAction<string>>
}

interface LoginContextProviderProps {
  children: ReactNode
}

export const LoginContext = createContext<LoginContextType | null>(null)

const LoginContextProvider = ({ children }: LoginContextProviderProps) => {
  const [pseudo, setPseudo] = useState("")

  return (
    <LoginContext.Provider value={{ pseudo, setPseudo }}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider
