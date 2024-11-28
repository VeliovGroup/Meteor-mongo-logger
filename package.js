Package.describe({
  name: 'ostrio:loggermongo',
  version: '2.2.0',
  summary: 'Logging: Store application\'s logs messages in MongoDB (Server & Client support)',
  git: 'https://github.com/veliovgroup/Meteor-logger-mongo',
  documentation: 'README.md'
});

Package.onUse((api) => {
  api.versionsFrom(['3.1']);
  api.use('mongo', 'server');
  api.use(['mongo', 'ecmascript', 'check', 'ostrio:logger@2.2.0'], ['client', 'server']);
  api.mainModule('loggermongo.js', ['client', 'server']);
});

Package.onTest((api) => {
  api.use('tinytest');
  api.use(['ecmascript', 'underscore', 'ostrio:logger', 'ostrio:loggermongo']);
  api.addFiles('loggermongo-tests.js');
});
