import React from 'react'

const TodoSearch = ({ search, setSearch }) => {
	const onChangeValue = (event) => {
		setSearch(event.target.value)
	}
	return (
		<input
			placeholder="Escribe una tarea"
			value={search}
			onChange={onChangeValue}
		/>
	)
}

export default TodoSearch
