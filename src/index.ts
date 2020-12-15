import Discord from 'discord.js';
import { exit } from 'process';
import commands from './commands'

const prefix = process.env.DISCORD_PREFIX || '!';

const client = new Discord.Client();

client.once('ready', () => {
  console.log('ready!');
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  try {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift()?.toLowerCase();

    if (!commandName) return;

    const command = commands.get(commandName);

    if(!command) return;

    console.log(command);

    command.execute(message);
  } catch (e) {
    message.channel.send(`Error: ${e}`);
  }
});

const discordToken = process.env.DISCORD_TOKEN;

if(!discordToken) {
  console.error('Discord token missing');
  exit(1);
}

client.login(discordToken);