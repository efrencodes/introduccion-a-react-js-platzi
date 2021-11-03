import React from 'react'

const TodoSearch = ({ search, setSearch }) => {
	const onChangeValue = (event) => {
		setSearch(event.target.value)
	}
	return (
		<input placeholder="Add list" value={search} onChange={onChangeValue} />
	)
}

export default TodoSearch
