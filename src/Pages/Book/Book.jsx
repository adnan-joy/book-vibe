import React from 'react';

const Book = ({singleBook}) => {


    const {bookName,author,image,rating,category}=singleBook;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{bookName}</h2>
    <p>By:{author}</p>
    
  </div>
  <div className="card-actions flex justify-between px-4 py-8">
    <p>{category}</p>
    <button className="btn btn-primary">Buy Now</button>
    </div>
</div>
        </div>
    );
};

export default Book;