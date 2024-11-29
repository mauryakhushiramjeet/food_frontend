import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    let erro=useRouteError()
  return (
   <>
   <h1>opps!!!!</h1>
   <h2>Something went wrong !!!</h2>
   <h3>{erro.status}:{erro.statusText}</h3>
   </>
  )
}
export default Error
