import pkg from 'package'

// EXPORTS /////////////////////////////////////////////////////////////////////

export function getName () {
  return pkg.productName
}

export function getVersion () {
  return pkg.version
}
