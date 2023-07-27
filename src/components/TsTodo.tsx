
import { useState } from 'react';
import {FaTrash} from 'react-icons/fa';

interface ITodo {
    id: number;
    title: string;
}

type ITodo2 = {
    id: number;
    title: string;
}

export const TsTodo = () => {
    const [title, setTitle] = useState<string>('');
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [serchTitle, setSerchTitle] = useState<string>('');

    const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        
        console.log(title);
        const randomInt = Math.random()*10000;

        const newTodo:ITodo = {
            id: randomInt,
            title: title,
        };

        setTodos([...todos,newTodo]);
        setTitle('');
    };

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        
        setTitle(e.target.value);
    };

    const handeleDelete =(todo:ITodo) => {
        //Todo削除処理
        const newTodos = todos.filter((todoItem) => todoItem.id !== todo.id);
        setTodos(newTodos);
    };

    const searchClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        //検索処理
        const matchTodos = todos.filter((todoItem)=> todoItem.title.includes(serchTitle));
        console.log(matchTodos);
        setTodos(matchTodos);

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

        <div className='mx-5 flex '>
            <input 
                type="text" 
                className='border rounded-md flex-1 px-2'
                placeholder='タイトルで検索...'
                onChange={(e)=>{
                    setSerchTitle(e.target.value);
                }}
            />
            <button className='bg-gray-400 rounded-md text-white px-3 py-2 mx-3' onClick={searchClick}>
                検索
            </button>
        </div>
        
    </div>


  )
}
