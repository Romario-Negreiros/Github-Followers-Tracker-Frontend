import { FC } from 'react'

import styles from './styles.module.css'

interface Props {
  error: string
}

const Error: FC<Props> = ({ error }) => {
  return (
    <div className={styles.container}>
      <h3>Hmm, something went wrong...</h3>
      <p>{error}</p>
    </div>
  )
}

export default Error
