import { mount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import HomeView, { fetchMissions, type Mission } from '@/views/HomeView.vue';

// Mocked data
const mockMissions: Mission[] = [
  { id: 1, location: 'Location 1', coor: '14.51446, 48.368721' },
  { id: 2, location: 'Location 2', coor: '16.373819, 48.208174' },
];

// const fetchMissions: fetchMissions = vi.fn().mockResolvedValue(mockMissions);

// Mock the fetchMissions function
vi.mock('@/views/HomeView.vue', () => {
  return {
    fetchMissions: vi.fn().mockResolvedValue(mockMissions),
    __esModule: true,
    default: vi.fn(),
  };
});

beforeEach(() => {
  vi.resetAllMocks();
});

describe('HomeView.vue', () => {
  it('fetches missions and displays them in the table', async () => {
    const wrapper = mount(HomeView);

    // Wait for the fetch to resolve and the component to re-render
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();  // Ensure all DOM updates are applied

    // Check if the table is initially visible
    expect(wrapper.find('table').isVisible()).toBe(true);

    // Simulate button click to hide the table
    await wrapper.find('button').trigger('click');

    // Check if the table is now hidden
    expect(wrapper.find('table').isVisible()).toBe(false);

    // Simulate button click to show the table
    await wrapper.find('button').trigger('click');

    // Check if the table is now visible again
    expect(wrapper.find('table').isVisible()).toBe(true);

    // Check the table rows
    const rows = wrapper.findAll('tbody tr');
    expect(rows).toHaveLength(mockMissions.length); // Check if there are 2 rows

    // Check the content of the first row
    const firstRowCells = rows[0].findAll('td');
    expect(firstRowCells[0].text()).toBe(mockMissions[0].id.toString());
    expect(firstRowCells[1].text()).toBe(mockMissions[0].location);
    expect(firstRowCells[2].text()).toBe(mockMissions[0].coor);

    // Check the content of the second row
    const secondRowCells = rows[1].findAll('td');
    expect(secondRowCells[0].text()).toBe(mockMissions[1].id.toString());
    expect(secondRowCells[1].text()).toBe(mockMissions[1].location);
    expect(secondRowCells[2].text()).toBe(mockMissions[1].coor);
  });

  it('displays the correct status message', async () => {
    const wrapper = mount(HomeView);

    // Initial status message
    expect(wrapper.vm.statusMessage).toBe('Status is true');

    // Simulate button click to hide the table
    await wrapper.find('button').trigger('click');

    // Updated status message
    expect(wrapper.vm.statusMessage).toBe('Status is false');
  });
});
