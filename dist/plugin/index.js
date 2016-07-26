"use strict";
var atom_1 = require("atom");
var plugin;
(function (plugin) {
    function execute_process() {
        var args = {
            command: 'echo',
            args: ["Hello World"],
            stdout: function (l) { console.log(l); }
        };
        var proc = new atom_1.BufferedProcess(args);
        console.log("BufferedProcess Started");
    }
    plugin.execute_process = execute_process;
})(plugin || (plugin = {}));
function activate(state) {
    atom.commands.add('atom-workspace', 'plugin:Process', plugin.execute_process);
    return true;
}
exports.activate = activate;
//# sourceMappingURL=index.js.map