// EXPORTS /////////////////////////////////////////////////////////////////////

export function getSelectedItems (winControl) {
  return winControl.selection.getItems().then((items) => (
    items.map((item) => item.data)
  ))
}

export function getFirstSelectedItem (winControl) {
  return winControl.selection.getItems().then((items) => (
    items.length > 0 ? Promise.resolve(items[0].data) : Promise.reject()
  ))
}

export function setSelection (winControl, comparator) {
  const indices = winControl.itemDataSource.list.reduce((memo, item, index) => {
    if (comparator(item)) {
      memo.push(index)
    }
    return memo
  }, [])

  return winControl.selection.set(indices)
}
