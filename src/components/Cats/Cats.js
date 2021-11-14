import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { usePrevious } from '../../hooks/usePrevious'
import { useQueryParam } from '../../hooks/useQueryParam'
import { loadCats } from '../../store/actions'
import { selectCats, selectLoadingCatsStatus } from '../../store/selectors'
import Loader from '../Loader/Loader'
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton'
import CatItem from './CatItem'

import styles from './cats.module.css'

export default function Cats() {
  
  const categoryId = useQueryParam('categoryId')
  const previousId = usePrevious(categoryId)
  
  const dispatch = useDispatch()
  const loadingCats = useSelector(selectLoadingCatsStatus)
  const cats = useSelector(selectCats(categoryId))
  

  useEffect(() => {
    if(!categoryId || previousId === categoryId || loadingCats) return
    dispatch(loadCats(categoryId))
  }, [categoryId])

  return (
    <div className={styles.cats_wrapper}>
      {
        cats.map(({id, url}, index) => {
          // Found out that the api sometimes returns same elements when fetching different pages of the same category
          // That causes react key errors as providing the same ids is a wrong application of reconciliation.  
          // In case of the order of cats won't be changed, I decided to set index in key too
          return <CatItem key={`${id}_${index}_${url}`} imgSrc={url} />
        })
      }
      {
        loadingCats ?
        <Loader /> :
        null
      }
      <LoadMoreButton categoryId={categoryId} />
    </div>
  )
}