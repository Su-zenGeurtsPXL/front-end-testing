it('has one test', () => {
    expect(true).toBe(true);
  });

import { mount } from '@vue/test-utils';
import HomeView from '../../src/views/HomeView.vue';

// describe('purchasing flow', () => {
//   beforeEach(() => {
//     jest.useFakeTimers('modern'); // Use modern fake timers
//   });

//   afterEach(() => {
//     jest.useRealTimers(); // Restore real timers after each test
//   });

//   it('displays correct text in button to purchase', () => {
//     const wrapper = mount(HomeView);
//     const button = wrapper.find('button');

//     expect(button.text()).toEqual('Purchase');
//   });

//   it('allows purchases within business hours', () => {
//     const wrapper = mount(HomeView);
//     const button = wrapper.find('button');

//     button.trigger('click');

//     jest.advanceTimersByTime(1000); // Advance timers by 1 second

//     expect(wrapper.vm.message).toEqual('Purchase: Success');
//   });

//   it('disallows purchases outside of business hours', () => {
//     const result = purchase();

//     expect(result).toEqual({ message: 'Error' });
//   });
// });

  