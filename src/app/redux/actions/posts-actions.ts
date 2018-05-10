export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const CREATE_POST = 'CREATE_POST'
export const GET_SINGLE_POST = 'GET_SINGLE_POST'
export const GET_SINGLE_POST_SUCCESS = 'GET_SINGLE_POST_SUCCESS'
export const DELETE_POST = 'DELETE_POST'
export function getPosts(){
   return {
       type: GET_POSTS
   }
}

export function getPostsSuccess(posts){
    return {
        type: GET_POSTS_SUCCESS,
        payload: posts
    }
}

export function createPost(post){
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function getSinglePost(id){
    return {
      type: GET_SINGLE_POST,
      payload: id
    }
}
export function getSinglePostSuccess(post){
    return{
        type: GET_SINGLE_POST_SUCCESS,
        payload: post
    }
}

export function deletePost(id){
    return{
        type: DELETE_POST,
        payload: id
    }
}