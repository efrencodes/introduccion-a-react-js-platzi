import { useState, useEffect } from 'react'

const useLocalStorage = (itemName, itemValue) => {
	const [value, setValue] = useState(itemValue)
	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		try {
			setTimeout(() => {
				const LocalTodoList = localStorage.getItem(itemName)
				let parsedTodoList

				if (!LocalTodoList) {
					localStorage.setItem(itemName, itemValue)
					parsedTodoList = itemValue
				} else {
					parsedTodoList = JSON.parse(LocalTodoList)
				}
				setValue(parsedTodoList)
				setLoading(false)
			}, 2000)
		} catch (e) {
			console.error(e)
			setError(true)
		}
	}, [])

	const saveTodos = (newTodos) => {
		// JSON.stringify convierte un json a string.
		try {
			localStorage.setItem(itemName, JSON.stringify(newTodos))
			setValue(newTodos)
		} catch (e) {
			console.error(e)
			setError(true)
		}
	}

	return {
		todos: value,
		saveTodos,
		loading,
		error
	}
}

export default useLocalStorage
