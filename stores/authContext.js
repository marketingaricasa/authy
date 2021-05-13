import { createContext, useEffect, useState } from 'react'
import netlifyIdentity from 'netlify-identity-widget'

const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
    authReady: false,
})

const [user, setUser ] = useState(null)

// connette con netlify (una volta, a inizio sessione)
useEffect(() => {
    netlifyIdentity.init
},[])

export const AuthContextProvider = ({ children }) => {
    return <AuthContext.Provider value={user}> { children } </AuthContext.Provider>
}

export default AuthContext