import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router';


const Book = ({singleBook}) => {


    const {bookName,author,image,rating,category,tags,bookId}=singleBook;
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div>
            <div className="card bg-base-100 w-96 shadow-sm max-h-116 border-b-gray-600">
    <figure>
        <img className='max-w-80 max-h-52 object-contain px-24 py-3 mt-4 rounded-xl bg-[#f3f3f3]'
        src={image}
        alt="Books" />
    </figure>
    <div className='flex justify-center gap-x-4 m-3'>
        {tags.map(tags=> <button className='text-[#23BE0A] px-5 py-0.5 bg-[#f3f3f3] rounded-2xl font-medium font-sans'>{tags}</button>)}
    </div>
    <div className="card-body border-b border-dotted mx-4">
        <h2 className="card-title font-bold text-2xl text-center">{bookName}</h2>
        <p className='font-sans text-lg'>By:{author}</p>
        
    </div>
    <div className="card-actions flex justify-between items-center px-5 py-5">
    <p className='font-sans text-lg'>{category}</p>
    <div className='flex items-center text-center gap-1.5'>
    <p className='text-center font-sans'>{rating}</p>
    <FaRegStar />
    </div>

    </div>
</div>
        </div>
        </Link>
    );
};

export default Book;