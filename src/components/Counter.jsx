import React ,{useState} from 'react'

export const Counter = () => {

    const [count, setCount] = useState(0)

    const handleUp = () => {
        setCount(count + 1);
    };

    const handleDown = () => {
        setCount(count - 1);
    };

  return (
    <div className='bg-white p-4 rounded-lg'>
        <div>カウント:{count}</div>
        <div className='flex flex-row space-x-2'>
            <button className='p-2 bg-blue-500 text-white' onClick={handleUp}> up</button>
            <button className='p-2 bg-gray-500  text-white' onClick={handleDown}>down</button>

        </div>
    </div>
    
  )
}
