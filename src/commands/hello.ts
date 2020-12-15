import { Message } from "discord.js";
import Command from "./command";

export default class Hello extends Command {
  execute(message: Message) {
    message.channel.send(`Hello, ${message.author}!`)
  }
}