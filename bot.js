// ==================================================================
const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client();
const ms = require("ms");
const fs = require('fs');
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');
const r1 = require('snekfetch');
const jimp = require('jimp')
const math = require('math-expression-evaluator'); 

const prefix = "#";


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
});

client.on('Iam Dnd Now', () => {
    client.user.setStatus("dnd");
 
 });

//=================================== Owner ===================================
const developers = ['316324088865882142'];
const admin = "#";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
 
  if (message.content.startsWith(admin + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(` ☑ Client Activity Now Is : \`Watching ${argresult} \` `)
  } else 
  if (message.content.startsWith(admin + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(` ☑ Client Activity Now Is : \`Listening ${argresult} \` `)
  } else 
  if (message.content.startsWith(admin + 'setstream')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
     message.channel.send(` ☑ Client Activity Now Is : \`Streaming ${argresult} \` `)
  }
  if (message.content.startsWith(admin + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(` Client UserName Changed To : \` ${argresult}\` `)
} else
if (message.content.startsWith(admin + 'setavatar')) {
  client.user.setAvatar(argresult);
      message.channel.send(` Client Avatar Changed To : \` ${argresult}\` `)
}
});

client.on('guildMemberAdd', member => {
var Canvas = require('canvas') //npm i canvas
var jimp = require('jimp') //npm i jimp
var channel = member.guild.channels.find('name', 'welcome');
    if(!channel) return;
channel.send('**Welcome** ' + `${member}` + ' **To** ' + `__${member.guild.name}__` + ' **Server** :two_hearts:')          

})

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`** :hearts: Welcome to the server :hearts:
  :grinning:  member name --> __${member}__ :grinning: 
  :bust_in_silhouette:  You are a member number --> __${member.guild.memberCount}__ :bust_in_silhouette:
  :airplane: __${moment().format('HH:mm:ss A')}__ <-- Date of entry of the server ** :airplane: `)
}).catch(console.error)
})


client.on('ready', function(){//npm i ms 
    var ms = 5000 ;
    var setGame = [`Soon`,`iiTzEnd | ● ØF ●#0920`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/v5bz`);
    }, ms);

});



//=================================== Commands ===================================




client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith(prefix + 'bcall')){
 if(!message.author.id === '316324088865882142') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

 client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 3600,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription("تم أرسال الرابط برسالة خاصة")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        
    .setDescription("** مدة الرابط : ساعه | عدد استخدامات الرابط : 5 **")
      message.author.sendEmbed(Embed11)
    }
}); 

client.on('message', message => {
        if (message.content === prefix + "inv") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setTitle(`:small_orange_diamond: Click Here To Invite Fantastic. `)
        .setURL(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`)
     message.channel.sendEmbed(embed);
       }
   });
   
   
   
   // Token
   
   
   
   
       client.login("NDgzNDE5NDE3MjE3MDczMTUy.DpRnBQ.tEO2zEbMn6EndnSGStrWqHN8wwA");