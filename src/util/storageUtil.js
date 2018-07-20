/*
	使用lacalStorage存储数据的工具模版

	1.函数
	2.对象
	需要想外暴露1个功能还是多个功能
*/

const TODOS_KEY = "todo_key";
export default {
	saveTodos (todos) {
		window.localStorage.setItem("TODOS_KEY", JSON.stringify(todos));
	},
	readTodos () {
		return  JSON.parse(window.localStorage.getItem("TODOS_KEY") || "[]");
	}
}