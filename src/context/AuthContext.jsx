import React, { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const navigate = useNavigate()

  const login = (newToken) => {
    localStorage.setItem('token', newToken)
    setToken(newToken)
    navigate('/')
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    navigate('/login')
  }

  useEffect(() => {
    if (!token) navigate('/login')
  }, [token])

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}