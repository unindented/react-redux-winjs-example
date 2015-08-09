'use strict'

module.exports = {
  options: {
    overrides: {
      'base64id@0.1.0': {
        repository: 'https://github.com/faeldt/base64id',
        license: 'MIT'
      },
      'deref@0.3.0': {
        repository: 'https://github.com/gextech/deref',
        license: 'MIT'
      },
      'extract-opts@3.0.1': {
        repository: 'https://github.com/isaacs/inherits',
        license: 'ISC'
      },
      'jsonify@0.0.0': {
        repository: 'https://github.com/substack/jsonify',
        license: 'WTF'
      },
      'log-driver@1.2.4': {
        repository: 'https://github.com/cainus/logdriver',
        license: 'ISC'
      },
      'rc@1.1.2': {
        repository: 'https://github.com/dominictarr/rc',
        license: 'BSD'
      },
      'ripemd160@0.2.0': {
        repository: 'https://github.com/cryptocoinjs/ripemd160',
        license: 'BSD'
      },
      'shelljs@0.3.0': {
        repository: 'https://github.com/shelljs/shelljs',
        license: 'BSD'
      },
      'uri-templates@0.1.9': {
        repository: 'https://github.com/geraintluff/uri-templates',
        license: 'Unlicense'
      }
    }
  },

  web: {
    src: '.',
    dest: 'dist/web/LICENSE'
  },

  electron: {
    src: '.',
    dest: 'dist/electron/LICENSE'
  }
}
