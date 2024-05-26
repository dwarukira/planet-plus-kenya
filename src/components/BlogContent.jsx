import React from 'react';
import { useParams } from 'react-router-dom';

function BlogContent({ blogs }) {
    const { id } = useParams();

    let blog = {};
    if (blogs?.data) {
        let arr = blogs.data.filter(blog => blog.id == id);
        blog = arr[0];
    } else {
        blog = {};
    }

    const renderContent = (content, index) => {
        switch (content.type) {
            case 'paragraph':
                return <p key={index}>{content.children[0].text}</p>;
            case 'image':
                return (
                    <img
                        key={index}
                        src={`http://localhost:1337${content.image.url}`}
                        alt={content.image.alt || 'Blog image'}
                        className="w-full object-cover my-4 line-break"
                    />
                );
            case 'heading':
                return <h2 key={index}>{content.children[0].text}</h2>;
            case 'quote':
                return <blockquote key={index}>{content.children[0].text}</blockquote>;
            default:
                return null;
        }
    };

    return (
        <div className='w-full pb-10 bg-white'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 ss:grid-cols-1 gap-x-8 gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>
                    <div className='col-span-2 gap-x-8 gap-y-8'>
                        {blog.attributes?.coverImg?.data?.attributes?.url && (
                            <img
                                src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`}
                                className='max-h-[300px] w-full object-cover'
                                alt={blog.attributes?.blogTitle}
                            />
                        )}
                        <h1 className='font-bold text-2xl my-1 pt-5'>{blog.attributes?.blogTitle}</h1>
                        <div className='pt-5'>
                            {Array.isArray(blog?.attributes?.blogContent) ? (
                                blog.attributes.blogContent.map((content, index) => renderContent(content, index))
                            ) : (
                                <p className='line-break'>{blog?.attributes?.blogContent}</p>
                            )}
                        </div>
                    </div>
                    <div className='w-full bg-white rounded-xl overflow-hidden drop-shadow-md py-5 max-h-[250px]'>
                        <div>
                            {blog.attributes?.authorImg?.data?.attributes?.url && (
                                <img
                                    src={`http://localhost:1337${blog.attributes.authorImg.data.attributes.url}`}
                                    className='p-2 w-[150px] h-[150px] rounded-full mx-auto object-cover'
                                    alt={blog.attributes?.authorName}
                                />
                            )}
                            <h1 className='font-bold text-2xl text-center text-gray-900 pt-3'>
                                {blog.attributes?.authorName}
                            </h1>
                            <p className='text-center text-gray-900 font-medium'>{blog.attributes?.authorDesc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogContent;
