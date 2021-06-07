const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require('./config.json')
const command = require('./Prison Bot/command')
const privatemessage = require('./Prison Bot/private-message')

const activities_list = [
  `https://t.me/Tim_Berling`,
  `ig: 5h1Vm_`,
  `contact5h1Vm@gmail.com`,
  `tg: Tim_Berling`
];
const guardlist = [
`Yeah! I am on Duty`,
`Sup bud! I am guarding rn..`,
`I am working.. Stop disturbing me 😒`,
"Need help? type `guard help` ",
"Yeah I am awake 😵..",
"Stop Pinging me 😑"
];

bot.on("ready", async () => {
  console.log(`Prison Guard logged in as: ${bot.user.tag}!`);
  privatemessage(bot, '', `You can't use that command here *stoopid*`)
})

bot.on('ready', () => {
  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length)); 
    bot.user.setActivity(activities_list[index], { type: 'WATCHING' });
  }, 50000000); // Runs this every 10 seconds.
});

command(bot, ['testing', 'test','tst', 'ping', ''], (message) => {
  if (message.author.bot) return;
  if (message.channel.type === 'dm' && message.channel.send("**You can't use that command here!**")) return;
  const gaurdsend = Math.floor(Math.random() * (guardlist.length));
  message.channel.send(guardlist[gaurdsend])
})



bot.login(config.token);