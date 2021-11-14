import React, { memo } from 'react'
import { Link } from "react-router-dom"
import styles from './categories.module.css'
import icon from './category-item-icon.png'

export default memo(function({ id, name, isActive }) {
  return (
    <div className={`${styles.category_item}${isActive ? ' active' : ''}`}>
      <Link to={`/categories/${id}`}>
        <img src={icon} alt={name} title={name} />
        {name}
      </Link>
    </div>
  )
})