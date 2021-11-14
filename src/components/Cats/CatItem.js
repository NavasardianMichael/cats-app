import React, { memo } from 'react'
import styles from './cats.module.css'

export default memo(function({ imgSrc }) {
  return (
    <div className={styles.cat_item}>
      <img src={imgSrc} title={imgSrc} alt={imgSrc} />
    </div>
  )
})