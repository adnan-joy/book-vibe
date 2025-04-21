import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    const [allBooks,setAllBooks]=useState([]);
    // useEffect(()=>{
    //     fetch("booksData.json")
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setAllBooks(data);
    //     })
    // },[])
    return (
        <div>
            <h1 className='text-4xl text-center p-6 font-bold'>Books</h1>

            <Suspense fallback={<span>Loading....</span>}>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-4'>
                    {data.map((singleBook)=><Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                    }
                    </div>
            </Suspense>
        </div>
    );
};

export default Books;