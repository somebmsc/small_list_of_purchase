const { DELETE_ITEM, ADD_TASK, CHECKED } = require('./types');

const TaskReducer = (state, action) => {
	switch (action.type) {
		case DELETE_ITEM:
			return state.filter((el) => el.id !== action.payload);

		case ADD_TASK:
			return [
				...state,
				{
					id: state.length + 1,
					task: action.payload,
					isChecked: false
				}
			];

		case CHECKED:
			return state.map((el) => {
				if (el.id === action.payload.id) {
					el.isChecked = !action.payload.isChecked;
				}
				return el;
			});

		default:
			return state;
	}
};

export default TaskReducer;
