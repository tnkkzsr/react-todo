import React from 'react';
import { FaTrash } from 'react-icons/fa';

export const Todo = () => {
  return (
    <div className='w-[400px] h-[500px] bg-white rounded-md px-5 py-3'>
        <div className="font-bold text-2xl">TODOアプリ</div>

        <div className='flex flex-row space-x-2'>
            <input 
                type="text" 
                className='border rounded-md flex-1 px-2'
                placeholder='タイトル...'
            />
            <button className='bg-blue-400 text-white px-3 py-2'>追加</button>
        </div>
        <div className='bg-white py-3 my-2 border flex justify-between'>
            
            <div className='flex flex-row'>
            <input 
                type="checkbox"
                className='mx-2'
            
            />
            <p>出かける</p>
            </div>

            <button className="delete-btn mr-4">
                <FaTrash />
            </button>

        </div>
        <div className='bg-white py-3 my-2 border flex justify-between'>
            
            <div className='flex flex-row'>
            <input 
                type="checkbox"
                className='mx-2'
            
            />
            <p>勉強する</p>
            </div>

            <button className="delete-btn mr-4">
                <FaTrash />
            </button>

        </div>
        <div className='bg-white py-3 my-2 border flex justify-between'>
            
            <div className='flex flex-row'>
            <input 
                type="checkbox"
                className='mx-2'
            
            />
            <p>買い物</p>
            </div>

            <button className="delete-btn mr-4">
                <FaTrash />
            </button>

        </div>
    </div>
  )
}
