import { FC } from 'react'

const UpdateForm: FC = () => {
  return (
    <div className="form-container">
      <h2>Update</h2>
      <p>If you are already registered and has changed your github&apos;s email or name lately, update them here!</p>
      <form>
        <div>
          <p className="note">
            If you have changed your github&apos;s email, input your old email here so we can find your registration to
            update it!
          </p>
          <input type="email" placeholder="Email..." />
        </div>
        <input placeholder="New name..." />
        <input type="email" placeholder="New email?..." />
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default UpdateForm
