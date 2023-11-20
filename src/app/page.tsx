'use client'
import { useState } from "react";
import type { MouseEventHandler } from "react"

type createTodo = {
  id: string,
  text: string,
  complete: boolean
}

const generateId = (): string => Math.random().toString(36).substring(2, 9)

export default function Home() {
  const [Todos, setTodos] = useState<Array<createTodo>>([])
  const [createdTodo, setCreatedTodo] = useState<string>('')

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreatedTodo(e.target.value)
  }

  // created todo's
  const createdTodos: MouseEventHandler<HTMLButtonElement> = () => {
    const newTodo = {
      id: generateId(),
      text: createdTodo,
      complete: false
    }
    setTodos([...Todos, newTodo])
    setCreatedTodo('')
    console.log(Todos)
  }

  // deleted todo's
  const deletedTodos = (id: string): void => {
    const newTodo =  Todos.filter(todo => todo.id !== id)
    setTodos(newTodo)
  }

  // completed todo's
  const completedTodos = (id: string): void => {
    const newTodo = [...Todos]
    const todoId = Todos.findIndex(todo => todo.id === id)
    if(!Todos[todoId].complete) Todos[todoId].complete = true
    else Todos[todoId].complete = false
    setTodos(newTodo)
  }
 
  return (
    <main className="flex flex-col items-center justify-between p-24 gap-20">
      <div className="flex gap-7">
        <input type="text" value={createdTodo} onChange={onChangeValue} placeholder="create todo" className="h-8 text-black text-center rounded-lg focus:outline-none"/>
        <button type="button" onClick={createdTodos} className="text-sm justify-center items-center rounded-lg bg-gray-500 h-8 w-24">Add todo</button>
      </div>
      <div className="">
        {Todos.map(({text, complete, id}) => (
          <div key={text} className="flex flex-row max-h-screen justify-center items-center mb-4">
              <p className="w-full">{text}</p>
              <button type="button" onClick={() => completedTodos(id)} className="bg-gray-500 rounded-lg h-8 w-20 mr-3">completar</button>
              <button type="button" onClick={() => deletedTodos(id)} className={`${complete ? '' : 'hidden'} bg-gray-500 rounded-lg h-8 w-20`}>deleted</button>
          </div>
        ))}
      </div>
    </main>
  )
}
