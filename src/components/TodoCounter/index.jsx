import React from 'react'

const TodoCounter = ({ todo, completed }) => (
	<h2>
		Lista de tareas {completed}/{todo}
	</h2>
)

export default TodoCounter
