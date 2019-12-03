import React, {useState} from 'react'

import styles from './Accordion.module.scss'

export const Accordion = ({ title, children }) => {
  const [isContentOpen, setIsContentOpen] = useState(true)

  const toggleContent = () => {
    setIsContentOpen(!isContentOpen)
  }

  return (
    <div className={styles.accordion}>
      <h2 onClick={toggleContent}>{title}</h2>
      {isContentOpen ? <p>Hihihi</p> : null}
    </div>
  )
}
