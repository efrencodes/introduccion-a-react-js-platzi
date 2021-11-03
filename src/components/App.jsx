import React, { useState } from 'react'
import TodoCounter from './TodoCounter'
import TodoSearch from './TodoSearch'
import TodoList from './TodoList'
import TodoItem from './TodoItem'
import CreateTodoButton from './CreateTodoButton'

const defaultTodo = [
	{ text: 'Curso de php', completed: false },
	{ text: 'Curso de JavaScript', completed: true },
	{ text: 'Curso de Typescript', completed: false },
	{ text: 'Curso de Github', completed: true }
]

const App = () => {
	const [todos, setTodos] = useState(defaultTodo)
	const [search, setSearch] = useState('')

	const totalTodo = todos.length
	const completedTodo = todos.filter((todo) => !!todo.completed).length

	const onCompletedItem = (text) => {
		const index = todos.findIndex((todo) => todo.text === text)
		const newTodo = [...todos]
		newTodo[index].completed = true
		setTodos(newTodo)
	}

	const onDeleteItem = (text) => {
		const index = todos.findIndex((todo) => todo.text === text)
		const newTodo = [...todos]
		newTodo.splice(index, 1)
		setTodos(newTodo)
	}

	return (
		<>
			<TodoCounter todo={totalTodo} completed={completedTodo} />
			<TodoSearch search={search} setSearch={setSearch} />
			<TodoList>
				{todos.map(({ text }) => (
					// eslint-disable-next-line arrow-body-style
					<TodoItem
						key={text}
						text={text}
						onDeleteItem={() => onDeleteItem(text)}
						onCompletedItem={() => onCompletedItem(text)}
					/>
				))}
			</TodoList>
			<CreateTodoButton />
		</>
	)
}

export default App
