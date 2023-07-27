import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Counter} from "../components/Counter"
import { Todo} from "../components/Todo"
import { TsTodo } from '../components/TsTodo'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return(

  <div className=
  'h-screen flex justify-center items-center bg-gray-400'>
    {/* <Counter/> */}
    {/* <Todo/> */}
    <TsTodo/>
  </div>

  );
}
