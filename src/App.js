import React, { useEffect } from 'react'
import Loader from './components/Loader/Loader'
import Content from './components/Content/Content'
import { loadCategories } from './store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { setLoadingCategoriesStatus } from './store/selectors'

import './App.css'

export default function App() {

  const dispatch = useDispatch()
  const loadingCategories = useSelector(setLoadingCategoriesStatus)

  useEffect(() => {
    dispatch(loadCategories())
  }, [dispatch])

  return (
    <div className="app-wrapper">
      {
        loadingCategories ?
        <Loader /> :
        <Content />
      }
    </div>
  )
}