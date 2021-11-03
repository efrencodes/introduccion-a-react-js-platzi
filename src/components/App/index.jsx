import React, { useState } from 'react'
import TodoCounter from '../TodoCounter'
import TodoSearch from '../TodoSearch'
import TodoList from '../TodoList'
import TodoItem from '../TodoItem'
import CreateTodoButton from '../CreateTodoButton'

import useLocalStorage from '../../customHooks/useLocalStorage'

const App = () => {
	const [todos, saveTodos] = useLocalStorage(
		'TODOLIST',
		JSON.stringify([{ text: 'Curso de php', completed: false }])
	)
	const [search, setSearch] = useState('')

	const totalTodo = todos.length
	const completedTodo = todos.filter((todo) => !!todo.completed).length

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
