import Vuex from 'vuex';
import {shallow, createLocalVue} from '@vue/test-utils';
import {__createMocks as createStoreMocks} from '../../src/mocks/store';

import ShoppingList from '../../src/components/ShoppingList';

// Tell Jest to use the mock
// implementation of the store.
jest.mock('../../src/mocks/store');

const localVue = createLocalVue();

localVue.use(Vuex);

describe('ShoppingList', () => {
    let storeMocks = createStoreMocks();
    console.log('storeMocks',createStoreMocks().store)
    let wrapper;

    // beforeEach(() => {
    //     // Create a fresh store and wrapper
    //     // instance for every test case.
    //     storeMocks = createStoreMocks();
    //     console.log('storeMocks', storeMocks);
    //     wrapper = shallow(ShoppingList, {
    //         store: storeMocks.store,
    //         localVue,
    //     });
    // });
    test.only('It should fetch items.', () => {
        expect(storeMocks.actions.fetchItems).toBeCalled();
    });
    test('It should add items to the basket when an item is clicked.', () => {
        wrapper.find('.items-not-in-basket li:first-child').trigger('click');

        expect(storeMocks.mutations.addItemToBasket).toBeCalled();
    });
    test('It should remove items from the basket when an item in the basket is clicked.', () => {
        wrapper.find('.items-in-basket li:first-child').trigger('click');

        expect(storeMocks.mutations.removeItemFromBasket).toBeCalled();
    });
    test('It should not render an empty basket.', () => {
        storeMocks = createStoreMocks({getters: {itemsInBasket: () => []}});
        wrapper = shallow(ShoppingList, {
            store: storeMocks.store,
            localVue,
        });

        expect(wrapper.contains('.basket')).toBe(false);
    });
});
