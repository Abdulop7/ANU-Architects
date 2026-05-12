const cron = require("node-cron");
const axios = require("axios");

// Fire API every day at 8:30 PM
cron.schedule("40 5 * * *", async () => {
    try {

        console.log("API firedddddddddddddddddddddddddddddddddddddd");

    } catch (err) {
        console.log(err.message);
    }
});