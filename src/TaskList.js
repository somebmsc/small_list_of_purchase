import { useContext } from 'react';
import { TaskContext } from './context/TaskContext';
const TaskList = () => {
	const { newArr, handleDeleteItem, handleCheckedItem } = useContext(TaskContext);

	return (
		<ul>
			{newArr.length ? (
				newArr.map((item) => {
					return (
						<div key={item.id}>
							<li className={item.isChecked ? 'lineThrought' : null}>
								<input
									type="checkbox"
									checked={item.isChecked}
									onChange={() => handleCheckedItem(item.id, item.isChecked)}
								/>
								&nbsp;
								{item.task}
								<button className="closedButton" onClick={() => handleDeleteItem(item.id)}>
									&times;
								</button>
							</li>
						</div>
					);
				})
			) : (
				<p>
					<strong>Enter some value</strong>
				</p>
			)}
		</ul>
	);
};

export default TaskList;
