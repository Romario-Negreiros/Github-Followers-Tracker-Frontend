import { FC } from 'react'

const RegisterForm: FC = () => {
  return (
    <div className="form-container">
      <h2>Register</h2>
      <p>Register to receive a daily report of your github&apos;s profile follows and unfollows in your email!</p>
      <form>
        <input placeholder="Name..." />
        <input type="email" placeholder="Email..." />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default RegisterForm
