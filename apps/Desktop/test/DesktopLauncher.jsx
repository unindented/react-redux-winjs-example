import DesktopLauncher from '../src/DesktopLauncher'
import {createMemoryHistory} from 'history'

const history = createMemoryHistory(['/'])

describe('DesktopLauncher', () => {
  let instance
  let node

  beforeEach(() => {
    node = document.createElement('div')
    instance = new DesktopLauncher()
    instance.renderTo(node, {history})
  })

  it('is not empty', () => {
    expect(node).not.toBeEmpty()
  })
})
