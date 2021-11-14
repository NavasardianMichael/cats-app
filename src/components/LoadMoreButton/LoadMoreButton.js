import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TEXTS } from '../../helpers/constants'
import { loadCats } from '../../store/actions'
import { selectCurrentPage } from '../../store/selectors'
import styles from './loadMoreButton.module.css'

function LoadMoreButton({categoryId}) {

  const dispatch = useDispatch()
  const currentPage = useSelector(selectCurrentPage(categoryId))

  function handleClick() {
    dispatch(loadCats(categoryId, currentPage + 1))
  }

  return (
    <div className={styles.load_more_section}>
      <button className={styles.load_more_button} onClick={handleClick}>
        {TEXTS.LOAD_MORE}
      </button>
    </div>
  )
}

export default memo(LoadMoreButton)