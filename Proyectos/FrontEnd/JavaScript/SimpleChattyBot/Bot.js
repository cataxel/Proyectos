const input = require('readline');
var rl = input.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Hello! My name is Aid.");
console.log("I was created in 2022.");
rl.setPrompt('Please, remind me your name : ');
rl.prompt();
rl.on('line',(your_name) => {
    console.log("What a great name you have. " + your_name + "");
    rl.close();
});
