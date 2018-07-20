/*
	包含多个有action触发去直接更新状态的方法的对象
*/

import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, DELETE_COMPLETE_TODOS, RECEIVE_TODOS} from './mutation-types'
export default {
	add_todo(state, todo) {
		state.todos.unshift(todo);
	},
	delete_todo(state, index) {
		state.todos.splice(index, 1);
	},
	select_all_todos(state, {check}) {
		state.todos.forEach(todo => todo.complete = check);
	},
	delete_complete_todos(state) {
		state.todos = state.todos.filter(todo => !todo.complete);
	},
	receive_todos(state, todos) {
		state.todos = todos;
	}
}