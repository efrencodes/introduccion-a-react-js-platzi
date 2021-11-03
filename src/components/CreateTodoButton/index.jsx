import React from 'react'

const CreateTodoButton = ({ onNewItem }) => {
	return (
		<button type="button" onClick={onNewItem}>
			Agregar nueva tarea
		</button>
	)
}
export default CreateTodoButton
