import * as PostActions from '../actions/posts-actions'
import * as _ from 'lodash';
export function PostsReducer(state = {}, action){
   switch(action.type){
       case PostActions.GET_POSTS_SUCCESS:
       return _.mapKeys(action.payload, 'id');

       case PostActions.GET_SINGLE_POST_SUCCESS:
       return {...state, [action.payload.id]: action.payload}
   }

   
    
}