import { FC } from 'react'

import { CloseModal } from '..'

import styles from './styles.module.css'

import type FormComponentsProps from '@common/types'

interface Props {
  error: string
  setErrorState: FormComponentsProps['setErrorState']
}

const Error: FC<Props> = ({ error, setErrorState }) => {
  return (
    <div className={styles.container}>
      <CloseModal setState={setErrorState} />
      <h3>Hmm, something went wrong...</h3>
      <p>{error}</p>
    </div>
  )
}

export default Error
