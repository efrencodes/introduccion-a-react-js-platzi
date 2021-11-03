import React, { useState } from 'react'
import TodoCounter from '../TodoCounter'
import TodoSearch from '../TodoSearch'
import TodoList from '../TodoList'
import TodoItem from '../TodoItem'
import CreateTodoButton from '../CreateTodoButton'

const App = () => {
	const LocalTodoList = localStorage.getItem('TODOLIST')
	let parsedTodoList

	if (!LocalTodoList) {
		localStorage.setItem(
			'TODOLIST',
			JSON.stringify([
				{ text: 'Curso de php', completed: false },
				{ text: 'Curso de JavaScript', completed: true },
				{ text: 'Curso de Typescript', completed: false },
				{ text: 'Curso de Github', completed: true }
			])
		)
		parsedTodoList = []
	} else {
		parsedTodoList = JSON.parse(LocalTodoList)
	}

	const [todos, setTodos] = useState(parsedTodoList)
	const [search, setSearch] = useState('')

	const totalTodo = todos.length
	const completedTodo = todos.filter((todo) => !!todo.completed).length

	const saveTodos = (newTodos) => {
		// JSON.stringify convierte un json a string.
		localStorage.setItem('TODOLIST', JSON.stringify(newTodos))
		setTodos(newTodos)
	}

	const onCompletedItem = (text) => {
		const index = todos.findIndex((todo) => todo.text === text)
		const newTodo = [...todos]
		newTodo[index].completed = true
		saveTodos(newTodo)
	}

	const onDeleteItem = (text) => {
		const index = todos.findIndex((todo) => todo.text === text)
		const newTodo = [...todos]
		newTodo.splice(index, 1)
		saveTodos(newTodo)
	}

	const onNewItem = () => {
		if (search) {
			const newItem = { text: search, completed: false }
			const newTodo = [...todos, ...newItem]
			saveTodos(newTodo)
		}
	}

	return (
		<>
			<TodoCounter todo={totalTodo} completed={completedTodo} />
			<TodoSearch search={search} setSearch={setSearch} />
			<TodoList>
				{todos?.map(({ text }) => (
					// eslint-disable-next-line arrow-body-style
					<TodoItem
						key={text}
						text={text}
						onDeleteItem={() => onDeleteItem(text)}
						onCompletedItem={() => onCompletedItem(text)}
					/>
				))}
			</TodoList>
			<CreateTodoButton onNewItem={onNewItem} />
		</>
	)
}

export default App
