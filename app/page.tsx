'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FoodModal, FoodFormData } from '@/components/ui/food-modal';
import { Card } from '@/components/ui/Card';

export default function Home() {
  const [foodItems, setFoodItems] = useState<FoodFormData[]>([]);

  useEffect(() => {
    const localState = JSON.parse(localStorage.getItem('food') || '[]');
    setFoodItems(localState);
  }, []);

  const handleFoodAdd = (data: FoodFormData) => {
    const localState = JSON.parse(localStorage.getItem('food') || '[]');
    const updatedFoodItems = [...localState, data];
    localStorage.setItem('food', JSON.stringify(updatedFoodItems));
    setFoodItems(updatedFoodItems);
    console.log('Form submitted:', data);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          <Image src="../assets/Logo.svg" alt="logo" width={100} height={100} />
        </h1>
        <div className='bg-[#FFAE00] text-white p-2 rounded-lg'>
        <FoodModal onSubmit={handleFoodAdd} />
        </div>
      </div>
      <div className=' flex justify-center h-20 bg-[#FFB30E] text-white p-2 rounded-lg'>
        <h1> Are you Starving ?</h1>
        <h2>just click few to get ... </h2>

        {/* search area */}

        <div className='flex justify-center'>
          <input type='text' placeholder='search food' className='p-2 rounded-lg'/>
          <button className='bg-[#FFAE00] text-white p-2 rounded-lg'>Search</button>

        </div>
      </div>
      {foodItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {foodItems.map((item, index) => (
            <Card key={index} title={item.food_name} />
          ))}
        </div>
      ) : (
        <div className="empty-state-message text-center py-12 text-gray-500">
          No items available. Click &quot;Add Food&quot; to get started.
        </div>
      )}

      {/* footer */}

      <div className='flex justify-center bg-[#FFB30E] text-white p-2 rounded-lg'>
        <h1>lorem ?</h1>
        <h2>click here to add your restaurant</h2>
      </div>

    </main>
    

  );
}