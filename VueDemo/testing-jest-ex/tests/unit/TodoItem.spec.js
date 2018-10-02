import {shallowMount} from "@vue/test-utils";
import TodoItem from "@/components/TodoItem";


describe('TodoItem', () => {
    it('should display name of the todo', function () {
        const todo = {id: 1, name: 'Wash the dishes'};
        const wrapper = shallowMount(TodoItem, {propsData: {todo}});
        const liWrapper = wrapper.find('li').text();
        // expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.vm.todo).toBe(todo);
        expect(liWrapper).toBe(todo.name);
    });
})
