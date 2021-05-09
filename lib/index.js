(function() {
  var _exec, child_process, jsonnetBinFilePath, path;

  path = require('path');

  child_process = require('child_process');

  jsonnetBinFilePath = path.resolve(__filename, '../../bin/jsonnet');

  _exec = function(args, sync) {
    args = Array.prototype.slice.call(args);
    if (sync) {
      return child_process.execFileSync.apply(child_process,[jsonnetBinFilePath, args] );
    } else {
      return child_process.execFile.apply(child_process,[jsonnetBinFilePath, [args[0]],args[1]]);
    }
  };

  module.exports = {
    exec: function() {
      return _exec(arguments);
    },
    execSync: function() {
      return _exec(arguments, true);
    }
  };

}).call(this);
