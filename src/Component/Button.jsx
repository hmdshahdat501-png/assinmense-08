'use client'

import { authClient } from "@/lib/auth-client";

const Button = () => {
    const hndaellogOut = async() => {
        await authClient.signOut();
        window.location.href = '/'
    }
    return (
        <div>
             <button onClick={hndaellogOut} className='mt-4 bg-blue-600 text-white px-10  rounded-md font-bold text-xl lg:px-32'>Borrow This Book</button>
        </div>
    );
};

export default Button;