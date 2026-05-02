"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const AllBooksPage = () => {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data.json')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setResult(data); 
      });
  }, []);

  // 🔍 Button click search
  const handleSearch = () => {
    const filtered = data.filter(dat =>
      dat.title.toLowerCase().includes(search.toLowerCase())
    );
    setResult(filtered);
  };

  return (
    <div className='container mx-auto mt-4'>

  
      <div className='flex justify-center gap-2 mb-6'>
        <input
          type="text"
          placeholder="Search books..."
          className="w-80 px-4 py-2 border rounded-full shadow focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="bg-black text-white px-4 py-2 rounded-full"
        >
          Search
        </button>
      </div>

   
      <div className='grid grid-cols-3 gap-4'>
        {
          result.length === 0 ? (
            <p className="col-span-3 text-center text-gray-500">
              No books found
            </p>
          ) : (
            result.map(dat => (
              <div className='bg-white shadow p-4 rounded-lg' key={dat.id}>
                
                <Image
                  className='rounded-sm'
                  width={400}
                  height={300}
                  src={dat.image_url}
                  alt='book image'
                />

                <h2 className='text-xl font-bold mt-2'>{dat.title}</h2>

                <div className='flex justify-between'>
                  <p className='bg-green-300 px-2 text-green-600 font-bold'>
                    Author: {dat.author}
                  </p>
                  <p className='bg-red-300 px-1 text-red-600 font-bold'>
                    Quantity: {dat.available_quantity}
                  </p>
                </div>

                <Link href={`deltes/${dat.id}`}>
                  <button className='bg-blue-700 text-white w-full mt-4 rounded'>
                    View Details
                  </button>
                </Link>

              </div>
            ))
          )
        }
      </div>

    </div>
  );
};

export default AllBooksPage;