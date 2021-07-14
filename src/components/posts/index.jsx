import { useState, useEffect } from "react";
import axios from 'axios';
import { Post } from "./Post";

// usePagination is a hook based pagination
import {usePagination} from '../../hooks/usePagination'

export const Posts = () => {
  let [posts, setPosts] = useState([])
  let itemsPerPage = 1;
  let startFrom = 1;

  useEffect(()=>{
    const fetchData = async () => {
      let {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
      
      if (data) {
        setPosts(data);
        console.log(data);
      }
    }
    fetchData();
  },[])

  let {slicedData, pagination, nextPage, prevPage, changePage} = usePagination({itemsPerPage, data: posts, startFrom});

  return (
    <>
      <h1>POSTS</h1>
      <div>
        {slicedData.map((p) => (
            <Post key={p.id} title={p.title} author={p.userId} body={p.body} />
          )
        )}
      </div>
      <div className='flex justify-around'>
        <button onClick={prevPage}>Previous</button>
          {pagination.map(page => {
            if (!page.ellipsis) {
              return (
                <button 
                  key={page.id}
                  className='mx-1 p-1 text-white text-center bg-indigo-600'
                  onClick={e => changePage(page.id, e)}
                >
                  {page.id}
                </button>
              )
            } 
            else { 
              return (
                <button 
                  key={page.id}
                  className='mx-1 p-1 bg-indigo-900 text-white text-center'
                >
                  &hellip;
                </button>
              )
            }
          })}
        <button onClick={nextPage}>Next</button>
      </div>
    </>
  )
}