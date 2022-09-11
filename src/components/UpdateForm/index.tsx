import { SubmitHandler, useForm } from 'react-hook-form'

// Email pattern regEx
import EmailPattern from '@common/regExs'

import type FormComponentsProps from '@common/types'
import type { FC } from 'react'

interface Inputs {
  email: string
  newName: string
  newEmail: string
}

const UpdateForm: FC<FormComponentsProps> = ({ setErrorState, setIsLoadedState, setSuccessMsgState }) => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      if (!data.newEmail && !data.newName) {
        throw new Error('To update your profile you to change at least one information!')
      }
      setIsLoadedState(false)
      const response = await fetch('http://localhost:3300/users/update', {
        method: 'UPDATE',
        body: JSON.stringify(data),
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
        setErrorState(err.message)
      }
    } finally {
      setIsLoadedState(true)
    }
  }

  return (
    <div className="form-container">
      <h2>Update</h2>
      <p>If you are already registered and has changed your github&apos;s email or name lately, update them here!</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p className="note">
            If you have changed your github&apos;s email, input your old email here so we can find your registration to
            update it!
          </p>
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
        <input placeholder="New name..." {...register('newName')} />
        <input type="email" placeholder="New email?..." {...register('newEmail')} />
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default UpdateForm
