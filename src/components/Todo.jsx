import React , { useState }from 'react';
import { FaTrash } from 'react-icons/fa';


export const Todo = () => {

    const [title, setTitle] = useState('');
    const [todos, setTodos] = useState([]);

    const handleClick = (e) => {
        
        console.log(title);
        const randomInt = Math.random()*10000;

        setTodos([...todos,{id:randomInt, title:title}]);
        setTitle('');
    };

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handeleDelete =(e) => {
        //Todo削除処理
        const newTodos = todos.filter
        ((todoItem) => todoItem.id !== e.id);
        setTodos(newTodos);
    };



  return (
    <div className='w-[400px] h-[500px] bg-white rounded-md px-5 py-3'>
        <div className="font-bold text-2xl">TODOアプリ</div>

        <div className='flex flex-row space-x-2 py-3'>
            <input 
                type="text" 
                className='border rounded-md flex-1 px-2'
                placeholder='タイトル...'
                onChange={handleChange}
                value={title}
            />
            <button className='bg-blue-400 text-white px-3 py-2' onClick={handleClick}>追加</button>
        </div>

        {todos.map((todoItem)=>{
            return <div className='bg-white py-3 my-2 border flex justify-between' key={todoItem.id}>
            
            <div className='flex flex-row'>
            <input 
                type="checkbox"
                className='mx-2'
                checked={todoItem.isCompleted}
            
            />
            <p>{todoItem.title}</p>
            </div>

            <button className="delete-btn mr-4">
                <FaTrash onClick={(e)=>{
                    console.log(e);
                    handeleDelete(todoItem);
                }}/>
            </button>

        </div>
        })}


        
    </div>
  )
}
