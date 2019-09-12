module.exports = {
  name: 'demo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/demo/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
