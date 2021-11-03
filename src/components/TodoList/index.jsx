import React from 'react'

const TodoList = (props) => {
	const { children } = props
	return (
		<section>
			<ul>{children}</ul>
		</section>
	)
}

export default TodoList
