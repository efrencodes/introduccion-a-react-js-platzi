import React from 'react'
import TodoCounter from '../TodoCounter'
import TodoSearch from '../TodoSearch'
import TodoList from '../TodoList'
import TodoItem from '../TodoItem'
import CreateTodoButton from '../CreateTodoButton'

import { TodoProvider, TodoContext } from '../TodoContext'

const App = () => {
	return (
		<>
			<TodoProvider>
				<TodoCounter />
				<TodoSearch />
				<TodoContext.Consumer>
					{({
						error,
						loading,
						todos,
						onDeleteItem,
						onCompletedItem
					}) => (
						<TodoList>
							{error && <p>No te preocupes, hubo un problema</p>}
							{loading && <p>Cargando tareas....</p>}
							{!loading && !todos?.length && (
								<p>Agrega una nueva tarea</p>
							)}
							{todos?.map(({ text }) => (
								// eslint-disable-next-line arrow-body-style
								<TodoItem
									key={text}
									text={text}
									onDeleteItem={() => onDeleteItem(text)}
									onCompletedItem={() =>
										onCompletedItem(text)
									}
								/>
							))}
						</TodoList>
					)}
				</TodoContext.Consumer>
				<CreateTodoButton />
			</TodoProvider>
		</>
	)
}

export default App
