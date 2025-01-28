"use client"
import Image from 'next/image';
import AddFood from './AddFood';
const Header = () => {
    
    return (
        <div className='flex justify-between p-5 bg-gray-100'>
            <div className='flex items-start'>
                <Image src="../assets/Logo.svg" alt='logo' width={80} height={80} />
            </div>
            <div className='flex items-end'>
                <button className='bg-[#FFAE00] text-white p-2 rounded-lg' 
                onClick={() => AddFood()}>Add Food</button>
            </div>
        </div>
    );
}

export default Header;
