
import Hero from '@/Component/Hero';
import Rewiw from '@/Component/Rewiw';
import She from '@/Component/She';
import Shapping from '@/Component/She';
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomePage = async() => {
  const res = await fetch('http://localhost:3000/data.json',{
    cache: 'no-store'
  })
  const data = await res.json();
  console.log(data)
  return (
   <div>
     <div className='mx-auto'>
      
      <Hero data = {data}></Hero>
     <div className='grid  grid-cols-1 container mx-auto gap-8 mt-8 lg:grid-cols-3'>
       {
        data.slice(0, 6).map( dat=>  <div className='bg-white shadow p-4 rounded-lg hover:animate__animated animate__slideInUp' key={dat.id}>
       
            <Image className='rounded-sm ' width={500} height={300} src={dat.image_url} alt='book image'></Image>
            <h2 className='text-xl font-bold mt-2'>{dat.title}</h2>
            <div className='flex justify-between'>
              <p className='bg-green-300 rounded-sm px-2 text-green-600 font-bold'>Author: {dat.author}</p>
              <p className='bg-red-300 rounded-sm px-1 text-red-600 font-bold'>Quantity: {dat.available_quantity}</p>
             
            </div>
           <Link href= {`deltes/${dat.id}`}><button className='bg-blue-700 text-white w-full rounded-sm mt-4 font-bold'>View Detles</button></Link>
        </div>)
      }
     
     </div>
      <Link href={'/books'}><Button className={'block mt-6 mx-auto'}>See more</Button></Link>
     
    </div>
    <Rewiw></Rewiw>
    <She></She>
   </div>
  );
};

export default HomePage;