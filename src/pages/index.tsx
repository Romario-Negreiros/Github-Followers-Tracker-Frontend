import { useState } from 'react'

import { RegisterForm, UnregisterForm, UpdateForm } from '../components'

import type { NextPage } from 'next'

type Forms = 'register' | 'unregister' | 'update'

const Home: NextPage = () => {
  const [form, setForm] = useState<Forms>('unregister')

  const renderForm = () => {
    switch (form) {
      case 'register':
        return <RegisterForm />
      case 'unregister':
        return <UnregisterForm />
      case 'update':
        return <UpdateForm />
    }
  }

  const handleFormSelect = (selectedForm: Forms) => {
    setForm(selectedForm)
  }

  return (
    <main>
      <h1>Github Followers Tracker</h1>
      <ul className="form-selection">
        <li onClick={() => handleFormSelect('register')} className={form === 'register' ? 'form-active' : ''}>Register</li>
        <li onClick={() => handleFormSelect('unregister')} className={form === 'unregister' ? 'form-active' : ''}>Unregister</li>
        <li onClick={() => handleFormSelect('update')} className={form === 'update' ? 'form-active' : ''}>Update</li>
      </ul>
      {renderForm()}
    </main>
  )
}

export default Home
