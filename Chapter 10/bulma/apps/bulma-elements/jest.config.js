module.exports = {
  name: 'bulma-elements',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/bulma-elements/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
