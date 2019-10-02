import React, { useState } from 'react';
import api from '../../services/api'

export default function Login({ history }) {
    const [email, setEmail] = useState('')
  
  async function handleSubmit(e) {
    e.preventDefault()
    
    const response = await api.post('/sessions', { email })

    const { _id } = response.data
    
    localStorage.setItem('user', _id)

    history.push('/dashboard')
  }
    
    return (
        <>
            <p>
            Ofereça <strong>spots</strong>para progrmadores e encontre <strong>talentos</strong> para sua empresa
            </p>
            <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-MAIL *</label>
            <input type="email" id="email" placeholder="seu melhor email" onChange={event => setEmail(event.target.value)} value={email}/>
            <button type="submit" className="btn">ENVIAR</button>
        </form>
        </>
    )
}