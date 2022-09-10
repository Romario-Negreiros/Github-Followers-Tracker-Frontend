import styles from './styles.module.css'

import type { FC } from 'react'

interface Props {
  successMsg: string
}

const Success: FC<Props> = ({ successMsg }) => {
  return (
    <div className={styles.container}>
      <h3>Done!</h3>
      <p>{successMsg}</p>
    </div>
  )
}

export default Success
