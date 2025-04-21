import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {

    const {id}= useParams();
    const bookId =parseInt(id);
    const data= useLoaderData();
    const singleBook=data.find(book=>book.bookId===bookId);
    
    const {bookName,category,author,image,review,publisher,rating,totalPages,yearOfPublishing,tags}=singleBook;

    return (
        <div className="card lg:card-side bg-base-100 max-h-3/4 shadow-sm border-2">
    <figure className='p-8 bg-[#f3f3f3] w-full'>
        <img className='object-contain'
        src={image}
        alt="Album" />
    </figure>
    <div className="card-body p-12">
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author} </p>
        <div className='border-t border-b border-dotted'>
            <p>{category}</p>
        </div>
        <div className='border-b border-dotted space-y-5'>
            <p className='font-sans'> <span className='font-bold'>Review:</span>{review}</p>
            <p className='space-x-5 mb-5'>Tag {tags.map(tags=> <button className='text-[#23BE0A] px-5 py-0.5 ml-5 bg-[#f3f3f3] rounded-2xl font-medium font-sans'>#{tags}</button>)}</p>
        </div>
        <div>
            <p className='font-sans'>Number of pages: <span className='font-bold'>{totalPages}</span> </p>
            <p className='font-sans'>Publisher: <span className='font-bold'>{publisher}</span> </p>
            <p className='font-sans'>Year of Publishing: <span className='font-bold'>{yearOfPublishing}</span> </p>
            <p className='font-sans'>Rating: <span className='font-bold'>{rating}</span> </p>
        </div>
        <div className="card-actions  font-sans mt-5">
            <button className="btn ">Read</button>
            <button className="btn btn-primary">Wishlist</button>
        </div>
    </div>
</div>
    );
};

export default BookDetails;