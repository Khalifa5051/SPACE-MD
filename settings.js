require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIADYHIVsxFmT4UQQAAG8HAAAKAAAAY3JlZHMuanNvbpVU246jOBD9F78STbjmJrW0QEggNAnpBHJZ7YMDBhzAOMbkNsq*r0hPT8*D7mwvT6ZsnTpVdU59B6TCNXLRDYy+A8rwGXLUHvmNIjACRpMkiIEOiCGHYARuE81cXeYOOtxXXpP49DK9INtwJH8zJBNHOA9uQWNVxyavXsCjA2hzKHD0G8DpILhKMi+iWa41UTY35O1xtmd2pLiWV5SOlUfUrrHyOr28gEeLCDHDJLVohkrEYOGimw8x+xp9NFYPaNkMBVOUkpmyHTi5LLjzXlCWYTVfVvO7UUziN0+11a*RnwR28Bov+Pk4dMt4RYpgvVPm3be1vguNCCfa+uIIZMOzbf5Ov8YpQbETI8Ixv32573hWSm5Xyy66vju52epU9HdIhv2ZdDJo19OtowyvtNSVrfc14qa*t8RtMSiMWKykkKqKaQwDe1ncqDt3KbIcPc0jfBuQ5a*Effahlfz*9L0ylL1yoyIKc0VKlunGKTcHfvWz3BZMzQ5Vz6r7sX+2w+hr9MXrwe*tunNHXvjyWcdrzK4y7hb2wSLl+BI4*ay7T9J4aw0+6UPesN+x1H0CL66RnnUH95fhRN6+nUJ05dvUv0dhPdxr5*rYLBYzgnLFyz2DTtSdZ9JIfRP8aX+*EpzNXrHXanmeYn2+y0pmHC8vz4pydHNiMJIeHcBQimvOIMcVaWOyrHYAjM8rFDHEn+0FQoAKspguG2VzxbLWPxaz+BgzNSddySMhW1vydXZw*OFFfwEdQFkVobpGsY1rXrGbh+oapqgGoz**6gCCrvx9cG06ReqABLOaB6ShRQXjj6l+XMIoqhrCVzcSme0BMTASP8OIc0zSuu1jQyCLMnxGZgZ5DUYJLGr0s0LEUAxGnDXop2vNKm4b7837smm8uqADyudAcAxGQFYUTZVFTZF6*ZGk*VF*u7SwkNJvBHHQAcXz2XDYEyW11+tJmjpo37Xhx09+LVyMOMRF3cp8NlUkL59ZzjoRB8F0qlupbqY6+KznQxjvjV9SISxP6*EpUY18o3pxLujbudNdjOdIOOTEV6u1X4z16iq+*AMIGIHXfOeKJhO78V70q9xS0PbIV*eLA30ntPRD+HadGCRJ4SzRUDeronWXTY9I2qq9oaavwvCeJ3npjScyyyb1sXC69+C4fGmzxeiMI*RrMprdi3BoowLxaKMG1W6LzW0IjZXpB9cS4TnR5lkyLMnusAnoNd4nQjfkZm**BkPRCT3K6ySdyo2xMI0w4QJhHsXpu2Sflil+rCr8FFM7qfY3wejpfALb+f335N6JtwITH51fMH7skn*xoxG4SbE*5ZceEfT9pBnbez+d3Ff+Pb1vz6U2uwuuddeWF9eLwePxVwfQAvKkYmW7MWlWEQQ6gFVNK1iHJNXv9qHhOPqPwgtYc*3TBGtcoprDkoKR1Nd6vcFA7invr3xWURvWGRgBJfWDWd4q+qZTuuKQf3gK6O032TDw+BtQSwECFAMUAAAICAA2ByFbMRZk+FEEAABvBwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB5BAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '233542053167',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Khalifa5051',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
