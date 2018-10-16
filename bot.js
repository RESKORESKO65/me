const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
console.log('By : moshaks');
client.user.setPresence({
  status: 'dnd',
  game: {
     type: 0,
     name: 'Owner ,',
     details: `Clan`,
     url: ' https://www.twitch.tv/',
     state: `Crazyskills`,
    application_id: '377479790195769345',
     assets: {
        small_image: `377480550207717376`,
        small_text: 'تعرف مشاكس',
        large_image: `377480353259978752`,
        large_text: `IMrz ّζ͜͡MOSHADev` }

  }
    });
});





client.login(process.env.BOT_TOKEN);
