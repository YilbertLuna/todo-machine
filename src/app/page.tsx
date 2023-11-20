'use client'
import { useState } from "react";
import type { MouseEventHandler } from "react"

type createTodo = {
  text: string,
  complete: boolean
}

export default function Home() {
  const [Todos, setTodos] = useState<Array<createTodo>>([])
  const [createdTodo, setCreatedTodo] = useState<string>('')

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreatedTodo(e.target.value)
  }

  const createdTodos:MouseEventHandler<HTMLButtonElement> = () => {
    const newTodo = {
      text: createdTodo,
      complete: false
    }
    setTodos([...Todos, newTodo])
    setCreatedTodo('')
  }
 
  return (
    <main className="flex flex-col items-center justify-between p-24 gap-20">
      <div className="flex gap-7">
        <input type="text" value={createdTodo} onChange={onChangeValue} placeholder="create todo" className="h-8 text-black text-center rounded-lg focus:outline-none"/>
        <button type="button" onClick={createdTodos} className="text-sm justify-center items-center rounded-lg bg-gray-500 h-8 w-24">Add todo</button>
      </div>
      <div className="">
        {Todos.map(({text, complete}) => (
          <ul key={text}>
            <li key={text}>
              <p>{text}</p>
            </li>
          </ul>
        ))}
      </div>
    </main>
  )
}
