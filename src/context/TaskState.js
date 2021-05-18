import React, { useReducer } from 'react';
import { TaskContext } from './TaskContext';
import TaskReducer from './TaskReducer';
import { CHECKED, DELETE_ITEM, ADD_TASK } from './types';

const TaskState = ({ children }) => {
	const arr = [
		{ id: 1, task: 'Купить молоко', isChecked: false },
		{ id: 2, task: 'Купить хлеб', isChecked: false },
		{ id: 3, task: 'Купить масло', isChecked: false }
	];

	const [ state, dispatch ] = useReducer(TaskReducer, arr);

	const handleCheckedItem = (id, isChecked) => {
		dispatch({
			type: CHECKED,
			payload: { id, isChecked }
		});
	};

	const handleDeleteItem = (id) => {
		dispatch({
			type: DELETE_ITEM,
			payload: id
		});
	};

	const handleAddTask = (task) => {
		dispatch({
			type: ADD_TASK,
			payload: task
		});
	};

	return (
		<TaskContext.Provider value={{ newArr: state, handleDeleteItem, handleCheckedItem, handleAddTask }}>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskState;
