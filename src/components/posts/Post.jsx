export const Post = ({key, title, author, body})=>{
  return (
    <div key={key} className='mx-2 my-1 px-4 py-1 bg-indigo-50'>
      <div className='flex justify-between'>
      <span className='text-md text-indigo-800 px-1'>{title}</span>
      <span className='text-md text-indigo-800 px-1'>{author}</span>
      </div>
      <div className='px-10 py-3'>
        {body}
      </div>
    </div>
  )
}