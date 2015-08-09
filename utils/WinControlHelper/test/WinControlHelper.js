import Immutable from 'immutable'
import React, {Component} from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import ReactWinJS from 'react-winjs'
import WinJS from 'winjs'

import * as WinControlHelper from 'WinControlHelper'

const {TestUtils} = React.addons

describe('WinControlHelper', () => {
  let instance

  beforeEach(() => {
    const items = Immutable.fromJS({
      '1': {id: '1', name: 'Foo Bar'},
      '2': {id: '2', name: 'Baz Qux'}
    })

    class Test extends Component {
      static propTypes = {
        items: ImmutablePropTypes.map.isRequired
      }

      componentDidMount () {
        const listView = this.refs.list.winControl
        WinControlHelper.setSelection(listView, () => true)
      }

      render () {
        const {items} = this.props
        const data = new WinJS.Binding.List(items.valueSeq().toJS())

        const itemRenderer = ReactWinJS.reactRenderer((item) => (
          <div>{item.data.name}</div>
        ))

        return (
          <ReactWinJS.ListView ref='list'
            layout={{type: WinJS.UI.ListLayout}}
            itemDataSource={data.dataSource}
            itemTemplate={itemRenderer}
            selectionMode='multi' />
        )
      }
    }

    instance = TestUtils.renderIntoDocument(
      <Test items={items} />
    )
  })

  describe('#getSelectedItems', () => {
    it('gets selected items', (done) => {
      const winControl = instance.refs.list.winControl
      WinControlHelper.getSelectedItems(winControl).then((selectedItems) => {
        expect(selectedItems.map((item) => item.id)).toEqual(['1', '2'])
        done()
      })
    })
  })

  describe('#getFirstSelectedItem', () => {
    it('gets the first selected item', (done) => {
      const winControl = instance.refs.list.winControl
      WinControlHelper.getFirstSelectedItem(winControl).then((selectedItem) => {
        expect(selectedItem.id).toBe('1')
        done()
      })
    })
  })
})
