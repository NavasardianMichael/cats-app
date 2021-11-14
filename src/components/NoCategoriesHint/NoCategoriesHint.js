import React from 'react'
import { TEXTS } from '../../helpers/constants'
import styles from './noCategoriesHint.module.css'

export default function NoCategoriesHint() {
  return (
    <h3 className={styles.no_categories_hint}>
      {TEXTS.NO_CATS}
    </h3>
  )
}