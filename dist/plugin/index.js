"use strict";
var atom_1 = require("atom");
var typescript_seed;
(function (typescript_seed) {
    function execute_process() {
        var args = {
            command: 'echo',
            args: ["Hello World"],
            stdout: function (l) { console.log(l); }
        };
        var proc = new atom_1.BufferedProcess(args);
        console.log("BufferedProcess Started");
    }
    typescript_seed.execute_process = execute_process;
})(typescript_seed || (typescript_seed = {}));
function activate(state) {
    atom.commands.add('atom-workspace', 'typescript_seed:Process', typescript_seed.execute_process);
    return true;
}
exports.activate = activate;
//# sourceMappingURL=index.js.map