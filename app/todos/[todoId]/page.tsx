import { Todo } from '../../../typings'
import { notFound } from 'next/navigation'

export const dynamicParams = true

type PageProps = {
  params: {
    todoId: string
  }
}

const fetchTodo = async (todoId: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
    next: { revalidate: 60 }
  })
  const todo: Todo = await res.json()
  return todo
}

const TodoPage = async ({ params: { todoId } }: PageProps) => {
  const todo = await fetchTodo(todoId)

  if (!todo.id) {
    return notFound()
  }

  return (
    <div className='p-10 bg-emerald-200 m-4 shadow-lg'>
      <p>#{todo.id}: {todo.title}</p>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
      <p className='border-t border-gray-700 mt-5 pt-4 text-right'>
        By User: {todo.userId}
      </p>
    </div>
  )
}

export default TodoPage

export const getStaticParams = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todos: Todo[] = await res.json()
  return todos.map(todo => ({
    params: {
      todoId: todo.id.toString()
    }
  }))
}
