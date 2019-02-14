console.log('Starting app---------------------------------------------');

const fs = require('fs');
const os = require('os');

let user = os.userInfo();
console.log(user);

console.log(`hello  ${user.username} `);
fs.appendFile('greetings.txt',`hello ${user.username} `,function (err){
    if(err)
    {console.log('An error occured');}
});