import React, { useState } from 'react'

import { RegisterForm, UnregisterForm, UpdateForm, Loader, Error, Success } from '../components'

import type { NextPage } from 'next'

type Forms = 'register' | 'unregister' | 'update'

const Home: NextPage = () => {
  const [isLoaded, setIsLoaded] = useState(true)
  const [error, setError] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [form, setForm] = useState<Forms>('register')

  const setErrorState = (error: string) => {
    if (error) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    setError(error)
  }

  const setIsLoadedState = (isLoaded: boolean) => {
    if (isLoaded) {
      document.body.classList.remove('overflow-hidden')
    } else {
      document.body.classList.add('overflow-hidden')
    }
    setIsLoaded(isLoaded)
  }

  const setSuccessMsgState = (successMsg: string) => {
    if (successMsg) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    setSuccessMsg(successMsg)
  }

  const handleFormSelect = (selectedForm: Forms) => {
    setForm(selectedForm)
  }

  const renderForm = () => {
    switch (form) {
      case 'register':
        return (
          <RegisterForm
            setErrorState={setErrorState}
            setIsLoadedState={setIsLoadedState}
            setSuccessMsgState={setSuccessMsgState}
          />
        )
      case 'unregister':
        return (
          <UnregisterForm
            setErrorState={setErrorState}
            setIsLoadedState={setIsLoadedState}
            setSuccessMsgState={setSuccessMsgState}
          />
        )
      case 'update':
        return (
          <UpdateForm
            setErrorState={setErrorState}
            setIsLoadedState={setIsLoadedState}
            setSuccessMsgState={setSuccessMsgState}
          />
        )
    }
  }

  return (
    <main>
      <h1>Github Followers Tracker</h1>
      <ul className="form-selection">
        <li onClick={() => handleFormSelect('register')} className={form === 'register' ? 'form-active' : ''}>
          Register
        </li>
        <li onClick={() => handleFormSelect('unregister')} className={form === 'unregister' ? 'form-active' : ''}>
          Unregister
        </li>
        <li onClick={() => handleFormSelect('update')} className={form === 'update' ? 'form-active' : ''}>
          Update
        </li>
      </ul>
      {renderForm()}
      {(!isLoaded || error || successMsg) && (
        <div className="modal">
          {!isLoaded ? (
            <Loader />
          ) : error ? (
            <Error error={error} setErrorState={setErrorState} />
          ) : successMsg ? (
            <Success successMsg={successMsg} setSuccessMsgState={setSuccessMsgState} />
          ) : (
            ''
          )}
        </div>
      )}
    </main>
  )
}

export default Home
