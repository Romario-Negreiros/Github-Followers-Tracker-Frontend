import styles from './styles.module.css'

import CloseIcon from '../../assets/xmark-solid.svg'
import Image from 'next/image'

import type { FC } from 'react'

interface Props {
  setState: (state: string) => void
}

const CloseModal: FC<Props> = ({ setState }) => {
  return (
    <div className={styles.container} onClick={() => setState('')}>
      <Image src={CloseIcon} alt="close modal" height={25} width={25} />
    </div>
  )
}

export default CloseModal
