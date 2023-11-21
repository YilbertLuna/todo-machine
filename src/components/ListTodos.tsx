import type { ButtonHTMLAttributes } from "react"

type todoProps = {
    id: string
    text: string,
    complete: boolean,
    deletedTodos: (value: string) => void
    completedTodos: (value: string) => void
}

type props = ButtonHTMLAttributes<HTMLButtonElement> & todoProps

export function ListTodo ({text, id, complete, deletedTodos, completedTodos }: props): JSX.Element {
    
    const deleted = () => {
        deletedTodos(id)
    }

    const completed = () => {
        completedTodos(id)
    }
    
    return(
        <div className="flex flex-row max-h-screen justify-center items-center mb-4">
            <p className="w-full">{text}</p>
            <button type="button" onClick={completed} className="bg-gray-500 rounded-lg h-8 w-20 mr-3">completar</button>
            <button type="button" onClick={deleted} className={`${complete ? '' : 'hidden'} bg-gray-500 rounded-lg h-8 w-20`}>deleted</button>
        </div>
    )
}