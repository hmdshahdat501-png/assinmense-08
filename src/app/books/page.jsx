import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AllBooksPage = async() => {
     const res = await fetch('http://localhost:3000/data.json',{
    cache: 'no-store'
  })
  const data = await res.json();
  console.log(data)
    return (
        <div className='grid grid-cols-3 gap-4 container mx-auto mt-4'>
           {
             data.map( dat=><div className='bg-white shadow p-4 rounded-lg' key={dat.id}>
                   
                        <Image className='rounded-sm ' width={400} height={300} src={dat.image_url} alt='book image'></Image>
                        <h2 className='text-xl font-bold mt-2'>{dat.title}</h2>
                        <div className='flex justify-between'>
                          <p className='bg-green-300 rounded-sm px-2 text-green-600 font-bold'>Author: {dat.author}</p>
                          <p className='bg-red-300 rounded-sm px-1 text-red-600 font-bold'>Quantity: {dat.available_quantity}</p>
                         
                        </div>
                       <Link href= {`deltes/${dat.id}`}><button className='bg-blue-700 text-white w-full rounded-sm mt-4 font-bold'>View Detles</button></Link>
                    </div>)
           }
        </div>
    );
};

export default AllBooksPage;