import React from 'react'

const TodoItem = ({ text, onDeleteItem, onCompletedItem }) => {
	return (
		<>
			<li>
				{' '}
				<button type="button" onClick={onCompletedItem}>
					✅
				</button>
				{text}{' '}
				<button type="button" onClick={onDeleteItem}>
					❎
				</button>
			</li>
		</>
	)
}

export default TodoItem
