import { ThunkAction } from 'redux-thunk'
import { RootState } from '../store'
import axios from 'axios'
export const FETCH_RECOMMEND_PRODUCTS_START='FETCH_RECOMMEND_PRODUCTS_START';
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS='FETCH_RECOMMEND_PRODUCTS_SUCCESS';
export const FETCH_RECOMMEND_PRODUCTS_FAIL='FETCH_RECOMMEND_PRODUCTS_FAIL';


interface FetchRecommendProductStartAction{
    type:typeof FETCH_RECOMMEND_PRODUCTS_START;
}

interface FetchRecommendProductSuccessAction{
    type:typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS;
    payload:any
}

interface FetchRecommendProductFailsAction{
    type:typeof FETCH_RECOMMEND_PRODUCTS_FAIL;
    payload:any
}

export type RecommendProductAction=
|FetchRecommendProductStartAction
|FetchRecommendProductSuccessAction
|FetchRecommendProductFailsAction;

export const fetchRecommendProductStartActionCreator=():FetchRecommendProductStartAction=>{
    return {
        type:FETCH_RECOMMEND_PRODUCTS_START
    }
}

export const fetchFetchRecommendProductSuccessActionCreator=(data:any):FetchRecommendProductSuccessAction=>{
    return {
        type:FETCH_RECOMMEND_PRODUCTS_SUCCESS,
        payload:data
    }
}

export const fetchFetchRecommendProductFailsActionCreator=(error:any):FetchRecommendProductFailsAction=>{
    return {
        type:FETCH_RECOMMEND_PRODUCTS_FAIL,
        payload:error
    }
}

export const giveMeDataActionCreator=():ThunkAction<void,RootState,unknown,RecommendProductAction>=>async (dispatch,getState)=>{
    dispatch(fetchRecommendProductStartActionCreator());
    try {
      const { data } = await axios.get(
        "https://www.fastmock.site/mock/7a00225a695edc0521497bbbf1f9afda/api/homes",
        {
          headers: {
            "x-icode": "FB80558A73FA658E",
          },
        }
      );
      if(data instanceof Array)dispatch(fetchFetchRecommendProductSuccessActionCreator(data))
    } catch (error) {
        if(error instanceof Error){
            dispatch(fetchFetchRecommendProductFailsActionCreator(error.message))
        }
    }
}
