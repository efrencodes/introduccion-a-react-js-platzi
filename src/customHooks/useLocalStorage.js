import { useState } from 'react'

const useLocalStorage = (itemName, itemValue) => {
	const LocalTodoList = localStorage.getItem(itemName)
	let parsedTodoList

	if (!LocalTodoList) {
		localStorage.setItem(itemName, itemValue)
		parsedTodoList = []
	} else {
		parsedTodoList = JSON.parse(LocalTodoList)
	}

	const [value, setValue] = useState(parsedTodoList)

	const saveTodos = (newTodos) => {
		// JSON.stringify convierte un json a string.
		localStorage.setItem(itemName, JSON.stringify(newTodos))
		setValue(newTodos)
	}

	return [value, saveTodos]
}

export default useLocalStorage
