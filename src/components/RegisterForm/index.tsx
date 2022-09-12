import { SubmitHandler, useForm } from 'react-hook-form'

// Email pattern regEx
import EmailPattern from '@common/regExs'

import type FormComponentsProps from '@common/types'
import type { FC } from 'react'

interface Inputs {
  name: string
  email: string
}

const RegisterForm: FC<FormComponentsProps> = ({ setErrorState, setIsLoadedState, setSuccessMsgState }) => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      setIsLoadedState(false)
      const response = await fetch('http://localhost:3300/users/register', {
        method: 'POAAAST',
        body: JSON.stringify({
          name: 'xalb'
        }),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      const body = await response.json()
      if (response.ok) {
        setSuccessMsgState(body)
      } else {
        throw new Error(body.error)
      }
    } catch (err) {
      if (err instanceof Error) {
        if (err.message === 'Failed to fetch') {
          setErrorState("We couldn't complete the action, please, try again!")
        } else {
          setErrorState(err.message)
        }
      }
    } finally {
      setIsLoadedState(true)
    }
  }

  return (
    <div className="form-container">
      <h2>Register</h2>
      <p>Register to receive a daily report of your github&apos;s profile follows and unfollows in your email!</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {errors.name?.message && <p className="error">{errors.name.message}</p>}
          <input placeholder="Name..." {...register('name', { required: 'Your name is needed!' })} />
        </div>
        <div>
          {errors.email?.message && <p className="error">{errors.email.message}</p>}
          <input
            type="email"
            placeholder="Email..."
            {...register('email', {
              required: 'Your email is needed!',
              pattern: {
                value: EmailPattern,
                message: 'Please input a valid email!'
              }
            })}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default RegisterForm
