const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (answer1) => {
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    rl.question('What do you listen while doing that? ', (answer3) => {
      rl.question('What meal is your favorite? ', (answer4) => {
        rl.question('What\'s your favorite thing to eat for that meal? ', (answer5) => {
          rl.question('Which sport is your absolute favorite? ', (answer6) => {
            rl.question('What\'s your superpower? (Tell us what you are amazing at!) ', (answer7) => {
              console.log(
                `Name: ${answer1}`,
                `\nFavorite Activity: ${answer2}`,
                `\nMusic playing while ${answer2.toLowerCase()}: ${answer3}`,
                `\nFavorite meal time: ${answer4}`,
                `\nFavorite meal to eat during ${answer4.toLowerCase()}: ${answer5}`,
                `\nFavorite sport: ${answer6}`,
                `\nSuperpower: ${answer7}`
              );

              rl.close();
            });
          });
        });
      });
    });
  });
});