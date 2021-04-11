import React from 'react';
import s from './TodoList.module.css';


class TodoListPage extends React.Component {
    state = {
        todos: [
            {id: Math.random(), title: 'Todo 1', done: false},
            {id: Math.random(), title: 'Todo 2', done: true},
            {id: Math.random(), title: 'Todo 3', done: false}
        ],
        todoText: ''
    }

    addTodo = (event) => {
        event.preventDefault();

        const newTodo = {
            id: Math.random(),
            title: this.state.todoText,
            done: false
        }

        console.log('ADD TODO', newTodo);
        this.setState({
            todos: [...this.state.todos, newTodo],
            todoText: ''
        })
    }

    deleteTodo = (id) => {
        console.log('DELETE', id);
        const filteredTodos = this.state.todos.filter(todo => todo.id !== id);

        this.setState({todos: filteredTodos});
    }

    toggleDone = (id) => {
        console.log('TOGGLE DONE', id);

        const newTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    done: !todo.done
                }
            }

            return todo;
        });

        this.setState({todos: newTodos});
    }

    setTodoText = (event) => {
        this.setState({todoText: event.target.value});
    }

    render() {
        const {todos, todoText} = this.state;

        return (
            <div className="page-wrapper">
                <h1>Todo App</h1>

                <div className={s.todoFormWrapper}>
                    <div className={s.card}>
                        <form onSubmit={this.addTodo}>
                            <div className={s.formGroup}>
                                <label>Todo Title</label>
                                <input 
                                    name="todo-title" 
                                    value={todoText}
                                    onChange={this.setTodoText}
                                    placeholder="Enter a todo title..." />
                            </div>

                            <div className={s.formGroup}>
                                <button type="submit" className={s.btn}>
                                    Add Todo
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className={s.todoGrid}>
                    {
                        todos.map((todo) => <TodoCard 
                                onDelete={this.deleteTodo}
                                onDone={this.toggleDone}
                                todo={todo} 
                                key={todo.id} />)
                    }
                </div>
            </div>
        )
    }
}


const TodoCard = ({todo, onDelete, onDone}) => (
    <div className={s.card}>
        <h3 className={s.cardText}>
            {todo.title}
        </h3>

        <div className={s.todoActions}>
            <button 
                className={s.btn}
                onClick={() => onDelete(todo.id)}>
                Delete
            </button>

            <button 
                className={s.btn}
                onClick={() => onDone(todo.id)}>
                {todo.done ? 'Done' : 'Not Done'}
            </button>
        </div>
    </div>
)

export default TodoListPage;
