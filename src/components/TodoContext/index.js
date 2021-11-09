import React, { useState } from 'react'

import useLocalStorage from '../../customHooks/useLocalStorage'

const TodoContext = React.createContext()

function TodoProvider({ children }) {
	const { todos, saveTodos, loading, error } = useLocalStorage(
		'TODOLIST',
		JSON.stringify([{ text: 'Curso de php', completed: false }])
	)

	const parsedTodoList = JSON.parse(todos)

	const [search, setSearch] = useState('')

	const totalTodo = parsedTodoList?.length
	const completedTodo = parsedTodoList?.filter(
		(todo) => !!todo.completed
	).length

	const onCompletedItem = (text) => {
		const index = parsedTodoList.findIndex((todo) => todo.text === text)
		const newTodo = [...parsedTodoList]
		newTodo[index].completed = true
		saveTodos(newTodo)
	}

	const onDeleteItem = (text) => {
		const index = parsedTodoList.findIndex((todo) => todo.text === text)
		const newTodo = [...parsedTodoList]
		newTodo.splice(index, 1)
		saveTodos(newTodo)
	}

	const onNewItem = () => {
		if (search) {
			const newItem = { text: search, completed: false }
			const newTodo = [...parsedTodoList, ...newItem]
			saveTodos(newTodo)
		}
	}
	return (
		<TodoContext.Provider
			value={{
				loading,
				error,
				parsedTodoList,
				totalTodo,
				completedTodo,
				search,
				setSearch,
				onCompletedItem,
				onDeleteItem,
				onNewItem
			}}
		>
			{children}
		</TodoContext.Provider>
	)
}

export { TodoContext, TodoProvider }
