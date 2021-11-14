import { SET_CATEGORES, SET_LOADING_CATEGORIES_STATUS, SET_LOADING_CATS_STATUS, SET_CATS } from './types';

const initialState = {
	loadingCategories: false,
	loadingCats: false,
	categories: [],
	cats: {},
	currentPages: {}
}

function dataReducer(state = initialState, { type, payload }) {
	switch (type) {
		case SET_CATEGORES: {
			return {
				...state,
				categories: payload.categories,
			}
		}							
		case SET_LOADING_CATEGORIES_STATUS: {
			return {
				...state,
				loadingCategories: payload.status,
			}
		}				
		case SET_LOADING_CATS_STATUS: {
			return {
				...state,
				loadingCats: payload.status,
			}
		}				
		case SET_CATS: {
			return {
				...state,
				cats: {
					...state.cats,
					[payload.categoryId]: state.cats[payload.categoryId] ? state.cats[payload.categoryId].concat(payload.cats) : payload.cats
				},
				currentPages: {
					...state.currentPages,
					[payload.categoryId]: payload.page
				}
			}
		}
		default: return state
	}
}

export default dataReducer