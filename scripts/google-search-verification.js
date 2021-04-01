const fs = require('fs');
const { env } = require('process');

const googleSearchConsoleKey = env.GOOGLE_SEARCH_CONSOLE;
if(googleSearchConsoleKey){
  fs.writeFile(`build/${googleSearchConsoleKey}`, `google-site-verification: ${googleSearchConsoleKey}`, (err) => {
    if (err) throw err;
    console.log(`Updating ${googleSearchConsoleKey}`);
});
}