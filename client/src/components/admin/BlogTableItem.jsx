import React from 'react';
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const BlogTableItem = ({blog,fetchBlogs,index}) => {

 const {title,createdAt}=blog;
 const BlogDate = new Date(createdAt);

 const {axios} = useAppContext()


 //to delete blog inside blogList dashboard
 const deleteBlog = async() => {
   const confirm  = window.confirm("Are you sure to delete this Blog?")
   if(!confirm) return;
   try {
    const {data} = await axios.post('/api/blog/delete', {id: blog._id})

    if(data.success){
      toast.success(data.message)
      await fetchBlogs()
    }
    else{
        toast.success(data.message)
    }

   } catch (error) {
      toast.success(error.message)
   }
 }

 //function to toggle the publish button
 const togglePublish = async () =>{
  try {
    const {data} = await axios.post('/api/blog/toggle-publish', {id: blog._id})

    if(data.success){
      toast.success(data.message)
      await fetchBlogs()
    }
    else{
        toast.success(data.message)
    }

   } catch (error) {
      toast.success(error.message)
   }
 }

  return (
    <tr className='border-y border-gray-300'>
      <th className='px-2 py-4'>{index}</th>
      <td className='px-2 py-4'>{title}</td>   
      <td className='px-2 py-4 max-sm:hidden'>{BlogDate.toDateString()}</td>  
      <td className='px-2 py-4 max-sm:hidden'>
        <p className={`${blog.isPublished ?"text-green-600":"text-orange-700"}`}>
            {blog.isPublished ? 'Published' : 'Unpublished'}
        </p>
      </td>  
    <td className='px-2 py-4 flex text-xs gap-3'>
      <button onClick={togglePublish} className='border rounded-md p-3 hover:text-black '>{blog.isPublished ? 'Unpublish' : 'Publish'}</button>
      <img src={assets.trash} alt='' className='w-8 hover:scale-110 transition-all cursor-pointer' onClick={deleteBlog}/>
    </td>
    </tr>
  );
}

export default BlogTableItem;
