import Command from "./commands/command";
import Hello from "./commands/hello";

const commands = new Map<String, Command>();

commands.set('hello', new Hello());

export default commands;