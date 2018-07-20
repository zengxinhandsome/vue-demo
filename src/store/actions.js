/*
	包含多个接受组件通知触发mutation调用间接更新状态的对象
*/

import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, DELETE_COMPLETE_TODOS, RECEIVE_TODOS} from './mutation-types'
import storageUtil from '../util/storageUtil.js'

export default {
	addTodo({commit}, todo) {
		// 提交对mutation的请求
		commit(ADD_TODO, {todo});	// 注意：这里的ADD_TODO是一个常量，实际上传的是 ADD_TODO常量所对应的字符串也就是 add_todo
	},								// 所以 mutation 中的方法名需要像这样 [ADD_TODO]		
	deleteTodo({commit}, index) {
		commit(DELETE_TODO, {index});
	},
	selectAllTodos({commit}, check) {
		commit(SELECT_ALL_TODOS, {check});
	},
	deleteCompleteTodos({commit}) {
		commit(DELETE_COMPLETE_TODOS);
	},
	// 异步获取todos并更新状态
	reqTodos({commit}) {
		setTimeout(() => {
			// 读取数据
			const todos = storageUtil.readTodos();
			// 提交mutation
			commit(RECEIVE_TODOS, todos);
		}, 500);
	}
}