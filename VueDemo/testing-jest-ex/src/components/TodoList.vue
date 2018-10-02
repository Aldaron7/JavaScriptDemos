<template>
    <div>
        <h1>Todo List</h1>
        <ul>
            <todo-item v-for="todo in todos" v-bind:key="todo.id" v-bind:todo="todo">
                {{todo.name}}
            </todo-item>
        </ul>
        <todo-input v-on:addTodo="addTodo($event)"/>
    </div>
</template>

<script>
    import TodoItem from "./TodoItem";
    import uuid from 'uuid/v4'
    import TodoInput from "./TodoInput";

    export default {
        name: "TodoList",
        components: {TodoInput, TodoItem},
        data() {
            return {
                todos: [
                    {id: 1, name: 'Wash the dishes'},
                    {id: 2, name: 'Clean the car'},
                    {id: 3, name: 'Learn about Vue.js'},
                ],
            };
        },
        methods: {
            addTodo(name) {
                this.todos = [...this.todos, {id: uuid(), name: name}];
                return this.todos;
            }
        },
    }
</script>

<style scoped>
    ul,
    li {
        list-style: none;
        margin-left: 0;
        padding-left: 0;
    }
</style>
