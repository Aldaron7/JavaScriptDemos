import {shallowMount, mount} from "@vue/test-utils";
import TodoList from "@/components/TodoList";
import TodoItem from "@/components/TodoItem";
import TodoInput from "@/components/TodoInput";

describe('TodoList.vue', () => {
    let wrapper;
    const todos = [{id: 2, name: 'Wash the dishes'}]

    beforeEach(() => {
        wrapper = mount(TodoList, {
            data: () => {
                return {todos: todos};
            }
        });
    })

    it('should contain a list of Todo items', function () {
        expect(wrapper.vm.todos).toContainEqual(todos[0]);
        // expect(wrapper.vm.$el).toMatchSnapshot();
    });
    it('should add an item to the todo list', function () {
        const todos2 = wrapper.vm.todos;
        const newTodos = wrapper.vm.addTodo('Go to work');
        expect(todos2.length).toBeLessThan(newTodos.length);
        newTodos.map(t => expect(t.id).toBeTruthy())
    });
    it('should add an item to the todo list when the button is clicked', function () {
        wrapper.find('form').trigger('submit', 'Clean the car');

        expect(wrapper.vm.todos.length).toBe(2);
    });
    it('should call addTodo when form is submitted', function () {
        const spyOn = jest.spyOn(wrapper.vm, 'addTodo');
        wrapper.find('form').trigger('submit', 'Clean the car');
        expect(wrapper.vm.addTodo).toHaveBeenCalled();
    });
    it('should call addTodo when the addTodo event happens', function () {
        wrapper.vm.addTodo = jest.fn();
        wrapper.find(TodoInput).vm.$emit('addTodo', 'Clean the car');
        expect(wrapper.vm.addTodo).toBeCalledWith('Clean the car');
    });
    it('should add an item to the todo list when the addTodo event happens', function () {
        wrapper.find(TodoInput).vm.$emit('addTodo', 'Clean the car');
        expect(wrapper.vm.todos.length).toBe(2);
    });
})
