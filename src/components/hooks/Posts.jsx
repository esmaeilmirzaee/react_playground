import { useState, useReducer } from 'react'

const allPosts = new Array(25).fill(0).map((_val, idx) => idx + 1)
const perPage = 10;

// initial values
const initialValues = {
  loading: false,
  more: true,
  posts: [],
  after: 0
}

// reducer function
const reducer = (state, action) => {
  if (action.type === 'start') {
    return { ...state, loading: true }
  }

  if (action.type === 'loaded') {
    return {
      ...state,
      loading: false,
      posts: [...state.posts, ...action.payload],
      more: action.payload.length === perPage,
      after: state.after + action.payload.length
    }
  }

  return state
}

const Posts = () => {
  // const [posts] = useState(allPosts.slice(0, perPage))
  const [state, dispatch] = useReducer(reducer, initialValues)
  const { loading, posts, more, after } = state;
  const handleClick = () => {
    dispatch({ type: 'start' })
    dispatch({ type: 'loaded', payload: allPosts.slice(after, after + perPage) })
  }

  return (
    <>
      <div className='flex flex-col m-10 text-center'>
        {posts.map((post, idx) => (
          <span className='p-10 bg-indigo-800 text-white text-center border-2 border-white' key={idx}>{post}</span>
        ))}

        {loading && (<div>loading...</div>)}

        {!loading && more && (<div className='cursor-pointer px-4 py-2 text-white bg-red-500' onClick={handleClick}>Load More</div>)}

      </div>
    </>
  )
}

export default Posts;