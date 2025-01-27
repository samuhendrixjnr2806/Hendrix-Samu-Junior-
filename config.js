const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
    alive_img_process.env.alive_img || "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-photo%2Ffantasy-scene-with-futuristic-robotic-human-character_23-2151254511.jpg&tbnid=6Ih54hDyAqiCMM&vet=1&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Ffuturistic-robot&docid=O_LRuR54BpTzpM&w=626&h=417&source=sh%2Fx%2Fim%2Fm1%2F2&kgs=0b86236df683f9df"
Alive_MSG_process.env.Alive_MSG || "hello im alive now"
};
