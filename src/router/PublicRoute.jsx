import React from 'react'
import { Navigate } from 'react-router-dom'
import { UseAuthContext } from '../auth/hook/UseAuthContext'

export const PublicRoute = ({children}) => {
  const {logged} = UseAuthContext()
  return (!logged )
    ? children
    : <Navigate to='/marvel'/>
}
