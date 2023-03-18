import { describe, expect, it } from 'vitest'
import { sleep } from '../src'

describe('time.ts', () => {
  it('sleep', async () => {
    const start = Date.now()
    await sleep(1000)
    const enable = Date.now() - start > 1000
    expect(enable).toEqual(true)
  })
})
