// Import the necessary modules
import { shallowMount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import HomeView from '@/views/HomeView.vue';

// Test the HomeView component
describe('HomeView', () => {
  // Define business hours
  const businessHourshours = [9, 18];

  // Use fake timers before each test
  beforeEach(() => {
    vi.useFakeTimers();
  });

  // Restore all timers after each test
  afterEach(() => {
    vi.useRealTimers();
  });

  // Test the button to display correct text
  it('displays correct text in button to purchase', () => {
    // Mount the HomeView component
    const wrapper = shallowMount(HomeView);

    // Find the button element
    const button = wrapper.find('button');

    // Check the text of the button
    expect(button.text()).toEqual('Purchase');
  });

  // Test the purchase method to allow purchases within business hours
  it('allows purchases within business hours', () => {
    // Mount the HomeView component
    const wrapper = shallowMount(HomeView);

    // Find the button element
    const button = wrapper.find('button');

    // Set the system time to a mock date
    const mockDate = new Date(2024, 6, 5, 13);
    vi.setSystemTime(mockDate);

    // Get the current time (mocked)
    const now = new Date();

    // Trigger a click event on the button
    button.trigger('click');

    // Check that the date is mocked within business hours
    expect(now.getHours())
      .toBeGreaterThan(businessHourshours[0])
      .toBeLessThan(businessHourshours[1]);
    expect(now.valueOf()).toBe(mockDate.valueOf());

    // Check that the message is correct
    expect(wrapper.vm.message).toEqual('Purchase: Success');
  });

  // Test the purchase method to disallow purchases after business hours
  it('disallows purchases after business hours', () => {
    // Mount the HomeView component
    const wrapper = shallowMount(HomeView)

    // Find the button element
    const button = wrapper.find('button')

    // Set the system time to a mock date
    const mockDate = new Date(2024, 6, 5, 23);

    // Set the system time to a mock date
    vi.setSystemTime(mockDate);

    // Get the current time (mocked)
    const now = new Date();

    // Trigger a click event on the button
    button.trigger('click');

    // Check that the date is mocked after business hours
    expect(now.getHours()).toBeGreaterThan(businessHourshours[1]);

    // Check that the message is correct
    expect(wrapper.vm.message).toEqual('Purchase: Error');
  });

  // Test the purchase method to disallow purchases before business hours
  it('disallows purchases before business hours', () => {
    // Mount the HomeView component
    const wrapper = shallowMount(HomeView)

    // Find the button element
    const button = wrapper.find('button')

    // Set the system time to a mock date
    const mockDate = new Date(2024, 6, 5, 5);

    // Set the system time to a mock date
    vi.setSystemTime(mockDate);

    // Get the current time (mocked)
    const now = new Date();

    // Trigger a click event on the button
    button.trigger('click');

    // Check that the date is mocked before business hours
    expect(now.getHours()).toBeLessThan(businessHourshours[0]);

    // Check that the message is correct
    expect(wrapper.vm.message).toEqual('Purchase: Error');
  });
});
