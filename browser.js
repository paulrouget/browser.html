require.config({
  scriptType: 'text/javascript;version=1.8',
  baseUrl: 'node_modules/',
  nodeIdCompat: true,
  paths: {
    'react': 'react/dist/react',
    'immutable': 'immutable/dist/immutable',
    'immutable/cursor': 'immutable/contrib/cursor/index',
    'pouchdb': 'lib/pouchdb/pouchdb-3.2.1.min',
    'omniscient': 'omniscient/dist/omniscient'
  },
  shim: {
    'immutable/cursor': {
      exports: 'Cursor',
      deps: ['shims/immutable-cursor', 'immutable']
    },
    'omniscient': {
      deps: ['shims/omniscient']
    },
    'pouchdb': {
      exports: 'PouchDB'
    }
  }
});


require(['browser/index']);
