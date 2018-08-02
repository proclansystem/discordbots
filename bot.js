const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
 هلا ي قلبي :heart: 
:champagne_glass: :honey_pot: 
كيفك ي عسل؟ ؟

بالله صوت ل خويي المتسابق رقم 2 و 11 :sparkles: 
" 
صوتت؟؟

الله يسعدك ي رب " 

واذا م صوتت بالله صوت :joy: :purple_heart: 

https://discord.gg/X4HkmVg       
لا تسحب علي يا قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
 هلا ي قلبي :heart: 
:champagne_glass: :honey_pot: 
كيفك ي عسل؟ ؟

بالله صوت ل خويي المتسابق رقم 2 و 11 :sparkles: 
" 
صوتت؟؟

الله يسعدك ي رب " 

واذا م صوتت بالله صوت :joy: :purple_heart: 

https://discord.gg/X4HkmVg                     
لا تسحب علي يا قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);
