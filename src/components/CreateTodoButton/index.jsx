import React from 'react'

const CreateTodoButton = () => {
	const onClickTodo = (msg) => console.log(msg)
	return (
		<button type="button" onClick={() => onClickTodo('hola')}>
			Add tarea
		</button>
	)
}
export default CreateTodoButton
