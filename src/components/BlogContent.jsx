import React from 'react';
import { useParams } from 'react-router-dom';
import { logo } from "../assets";


function BlogContent({ blogs }) {
  const { id } = useParams();
  const blog = blogs?.find((blog) => blog.id == id);

  if (!blog) {
    return <div>Blog post not found</div>;
  }
  
  return (
    <div className='w-full pb-10 bg-white'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 ss:grid-cols-1 gap-x-8 gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>
          <div className='col-span-2 gap-x-8 gap-y-8'>
            {blog.cover_photo_path && (
              <img
                src={`https://admin.planetpluskenya.co.ke/storage/app/public/${blog.cover_photo_path}`}
                className='max-h-[300px] w-full object-cover'
                alt={blog.title}
              />
            )}
            <h1 className='font-bold text-2xl my-1 pt-5'>{blog.title}</h1>
            <div className='pt-5' dangerouslySetInnerHTML={{ __html: blog.body }} />
          </div>
          <div className='w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]'>
            <div>
              <img
                src={logo}
                className='p-2 w-[150px] h-[150px] rounded-full mx-auto object-cover'
                alt='Author'
              />
              <h1 className='font-bold text-2xl text-center text-gray-900 pt-3'>
                {blog.author}
              </h1>
              {/* <p className='text-center text-gray-900 font-medium'>Author description</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogContent;