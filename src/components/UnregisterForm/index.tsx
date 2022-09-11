import { SubmitHandler, useForm } from 'react-hook-form'

// Email pattern regEx
import EmailPattern from '@common/regExs'

import type FormComponentsProps from '@common/types'
import type { FC } from 'react'

interface Input {
  email: string
}

const UnregisterForm: FC<FormComponentsProps> = ({ setErrorState, setIsLoadedState, setSuccessMsgState }) => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<Input>()

  const onSubmit: SubmitHandler<Input> = async data => {
    try {
      setIsLoadedState(false)
      const response = await fetch('http://localhost:3000/users/unregister', {
        method: 'DELETE',
        body: JSON.stringify(data),
        headers: new Headers({
          'Content-Type': 'application.json'
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
        setErrorState(err.message)
      }
    } finally {
      setIsLoadedState(true)
    }
  }
  return (
    <div className="form-container">
      <h2>Unregister</h2>
      <p>
        This will stop the tracking of your github profile&apos;s followers and you will no longer receive a daily
        report in your email!
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          ></input>
        </div>
        <button type="submit">Unregister</button>
      </form>
    </div>
  )
}

export default UnregisterForm
