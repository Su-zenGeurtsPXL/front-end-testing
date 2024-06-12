import { afterEach, describe, expect, it, vi } from 'vitest'

it('should get with a mock', () => {
    const mockDate = new Date(2022, 0, 1)
    vi.setSystemTime(mockDate)
    const now = new Date()
    expect(now.valueOf()).toBe(mockDate.valueOf())
    // reset mocked time
    vi.useRealTimers()
  })