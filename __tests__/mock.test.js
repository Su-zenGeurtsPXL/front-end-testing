import { afterEach, describe, expect, it, vi } from 'vitest'

function getLatest(index = basket.items.length - 1) {
    
  return basket.items[index]
}

const basket = {
  items: [
    { product: 'Maxi Dress', price: 170.00 },
    { product: 'Ball Gown', price: 975.00 },
    { product: 'Prom Dress', price: 450.00 },
    // ...
  ],
  getLatest, // can also be a `getter or setter if supported`
}

describe('reading basket', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should get the latest basket item with a spy', () => {
    const spy = vi.spyOn(basket, 'getLatest')
    expect(spy.getMockName()).toEqual('getLatest')

    expect(basket.getLatest()).toEqual(
      basket.items[basket.items.length - 1],
    )

    expect(spy).toHaveBeenCalledTimes(1)

    spy.mockImplementationOnce(() => 'access-restricted')
    expect(basket.getLatest()).toEqual('access-restricted')

    expect(spy).toHaveBeenCalledTimes(2)
  })

  it('should get with a mock', () => {
    const mock = vi.fn().mockImplementation(getLatest)

    expect(mock()).toEqual(basket.items[basket.items.length - 1])
    expect(mock).toHaveBeenCalledTimes(1)

    mock.mockImplementationOnce(() => 'access-restricted')
    expect(mock()).toEqual('access-restricted')

    expect(mock).toHaveBeenCalledTimes(2)

    expect(mock()).toEqual(basket.items[basket.items.length - 1])
    expect(mock).toHaveBeenCalledTimes(3)
  })
})