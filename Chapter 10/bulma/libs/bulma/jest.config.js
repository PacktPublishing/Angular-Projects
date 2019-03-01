module.exports = {
  name: 'bulma',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/bulma',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
