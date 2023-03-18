import { describe, expect, it } from 'vitest'
import { sleep } from '../src'

describe('time.ts', () => {
  it('exported', async () => {
    const start = Date.now()
    expect(await sleep(1000)).toEqual(Date.now() - start > 1000)
  })
})
