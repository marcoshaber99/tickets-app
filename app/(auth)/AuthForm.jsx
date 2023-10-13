"use client"

import { useState } from 'react'

const AuthForm = ({handleSubmit}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form onSubmit={(e) => handleSubmit(e, email, password) }>

      <div className="my-5">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="my-5">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className='btn-primary'>Login</button>
    </form>
  )
}

export default AuthForm