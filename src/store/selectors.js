export const setLoadingCategoriesStatus = state => state.data.loadingCategories
export const selectLoadingCatsStatus = state => state.data.loadingCats
export const selectCategories = state => state.data.categories
export const selectCats = categoryId => state => state.data?.cats?.[categoryId] ?? []
export const selectCurrentPage = categoryId => state => state.data?.currentPages?.[categoryId]