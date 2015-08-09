import * as InfoHelper from 'InfoHelper'

describe('InfoHelper', () => {
  describe('#getName', () => {
    it('returns the app name', () => {
      expect(InfoHelper.getName()).toBeTruthy()
    })
  })

  describe('#getVersion', () => {
    it('return the app version', () => {
      expect(InfoHelper.getVersion()).toMatch(/\d\.\d\.\d/)
    })
  })
})
