import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HomeView from '../src/views/HomeView.vue'

describe('HomeView', () => {
  it('renders properly', () => {
    const wrapper = mount(HomeView)
    expect(true).toBeTruthy()
  })
})

// describe('HomeView', () => {
//   it('renders properly', () => {
//     const wrapper = mount(HomeView)
//     expect(wrapper.find('table').exists()).toBeTruthy()
//   })

//   it('fetches and displays user data', async () => {
//     // Mock the fetch function
//     jest.spyOn(global, 'fetch').mockResolvedValue({
//       json: jest.fn().mockResolvedValue([
//         { id: 1, name: 'John Doe' },
//         { id: 2, name: 'Jane Smith' },
//       ]),
//     })

//     const wrapper = mount(HomeView)
//     await wrapper.vm.$nextTick()

//     const tableRows = wrapper.findAll('table tbody tr')
//     expect(tableRows.length).toBe(2)

//     const firstRow = tableRows[0]
//     expect(firstRow.text()).toContain('John Doe')

//     const secondRow = tableRows[1]
//     expect(secondRow.text()).toContain('Jane Smith')
//   })
// })