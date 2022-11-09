import { observable, autorun, computed, action, makeObservable } from "mobx";
import { Todo } from "src/types";

class TodoStore {
  todos = [
    { id: 1, text: "foo", isDone: false },
    { id: 2, text: "bar", isDone: true },
  ];

  constructor() {
    makeObservable(this, {
      todos: observable,
      completedTodosCount: computed,
      todosLength: computed,
      report: computed,
      addTodo: action,
      toggleTodo: action,
      changeText: action,
    });
    autorun(() => console.log(this.report));
  }

  get completedTodosCount() {
    return this.todos.filter((todo) => todo.isDone === true).length;
  }

  get todosLength() {
    return this.todos.length;
  }

  get report() {
    const nextTodo = this.todos.find((todo) => todo.isDone === false);
    return (
      `Next todo: "${nextTodo ? nextTodo.text : "none"}". ` +
      `Progress: ${this.completedTodosCount}/${this.todos.length}` +
      `Todos: ${this.todos[this.todos.length - 1].text}}`
    );
  }

  addTodo(text: string) {
    this.todos.push({
      id: this.todos.length + 1,
      text: text,
      isDone: false,
    });
  }

  toggleTodo(id: Todo["id"]) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.isDone = !todo.isDone;
    }
  }

  changeText(todo: Pick<Todo, "text">, text: string) {
    todo.text = text;
  }
}

export const todoStore = new TodoStore();
