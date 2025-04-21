import React from 'react';

import bookImage from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className=' my-10 flex justify-around items-center w-full p-16 bg-[#f3f3f3] rounded-3xl gap-4'>
            <div className='w-3/4'>
                <h1 className='text-6xl font-bold mb-12'>Books to freshen up your bookshelf</h1>
                <button className='btn bg-[#23BE0A] text-white font-bold text-2xl font-sans px-7 py-7'>View The List</button>
            </div>
            <div>
                <img className='w-7/8 rounded-3xl' src={bookImage} alt="" srcset="" />
            </div>
        </div>
    );
};

export default Banner;