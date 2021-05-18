import React, { useState, useContext } from 'react';
import { TaskContext } from './context/TaskContext';

const AddTastk = () => {
	const { handleAddTask } = useContext(TaskContext);
	const [ value, setValue ] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();

		if (value.trim()) {
			handleAddTask(value);
			setValue('');
		}
	};

	return (
		<form style={{ marginBottom: '10px', marginLeft: '40px' }} onSubmit={submitHandler}>
			<input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
			<button type="submit">Add task</button>
		</form>
	);
};

export default AddTastk;
