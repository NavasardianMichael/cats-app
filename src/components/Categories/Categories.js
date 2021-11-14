import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { selectCategories } from '../../store/selectors'
import CategoryItem from './CategoryItem'

import styles from './categories.module.css'

export default function Categories() {

  const categories = useSelector(selectCategories, shallowEqual)
   
  if(!categories || !categories.length) return null
  
  return (
    <div className={styles.categories_wrapper}>
      <div className={styles.categories}>
        {
          categories.map(category => {
            return (
              <CategoryItem
                key={category.id}
                id={category.id}
                name={category.name}
              />
            )
          })
        }
      </div>
    </div>
  );
}