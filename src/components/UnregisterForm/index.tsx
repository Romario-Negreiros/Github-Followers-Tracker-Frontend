import { FC } from 'react'

const UnregisterForm: FC = () => {
  return (
    <div className="form-container">
      <h2>Unregister</h2>
      <p>
        This will stop the tracking of your github profile&apos;s followers and you will no longer receive a daily
        report in your email!
      </p>
      <form>
        <input type="email" placeholder="Email..."></input>
        <button type="submit">Unregister</button>
      </form>
    </div>
  )
}

export default UnregisterForm
