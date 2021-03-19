module.exports = {
  name: 'es-admin',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/es-admin/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
