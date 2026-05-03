
import Button from '@/Component/Button';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';

const DetelsPage = async({ params }) => {

    
    const {id} = await params;
    const res = await fetch('https://assinmense-08.vercel.app/data.json',{
    cache: 'no-store'
  })
  const data = await res.json();
  const det = data.find(dtr=> dtr.id == id);
  console.log(det)


    return (
        <div className='mx-auto container  mt-8 gap-4 bg-white p-4 shadow border rounded-sm animate__animated animate__backInLeft lg:flex'>
           <div>
            <Image className='rounded-md' src={det.image_url} alt='book image' width={1500} height={1000}></Image>
            </div>
            <div>
                 <h2 className='text-4xl font-bold'>{det.title}</h2>
                 <p className='opacity-50' >{det.description}</p>
                  <div className='flex gap-8 mt-4'>
                          <p className='bg-green-300 rounded-sm px-2 text-green-600 font-bold'>Author: {det.author}</p>
                          <p className='bg-red-300 rounded-sm px-1 text-red-600 font-bold'>Quantity: {det.available_quantity}</p>
                         
                        </div>
                       <Button></Button>
            </div>
        </div>
    );
};

export default DetelsPage;