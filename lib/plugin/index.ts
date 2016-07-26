import { BufferedProcess } from "atom";

module plugin {

    /**
     * Spawn an external process, which simply
     * logs 'Hello World' to the console.
     */
    export function execute_process() {
        var args = {
          command: 'echo',
          args: ["Hello World"],
          stdout: (l) =>  { console.log(l) }
        };
        var proc = new BufferedProcess(args);
        console.log("BufferedProcess Started");
    }
}

export function activate(state) {
    atom.commands.add('atom-workspace', 'plugin:Process', plugin.execute_process);
    return true;
}
