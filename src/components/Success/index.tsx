import CloseModal from '../CloseModal'

import styles from './styles.module.css'

import type { FC } from 'react'
import type FormComponentsProps from '@common/types'

interface Props {
  successMsg: string
  setSuccessMsgState: FormComponentsProps['setSuccessMsgState']
}

const Success: FC<Props> = ({ successMsg, setSuccessMsgState }) => {
  return (
    <div className={styles.container}>
      <CloseModal setState={setSuccessMsgState} />
      <h3>Done!</h3>
      <p>{successMsg}</p>
    </div>
  )
}

export default Success
