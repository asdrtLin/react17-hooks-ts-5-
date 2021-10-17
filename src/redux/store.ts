import { createStore,combineReducers,applyMiddleware } from 'redux'

import languageReducer from './language/languageReducer';

import recommendProductsReducer from './recommendProducts/recommendProductsReducer';

import thunk from 'redux-thunk'

import { actionLog } from './middleWares/actionLog'

const rootReducer=combineReducers({
    languageReducer,
    recommendProductsReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk,actionLog));

export type RootState= ReturnType<typeof store.getState>

export default store;