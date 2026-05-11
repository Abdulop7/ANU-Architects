const cron = require("node-cron");
const axios = require("axios");

// Fire API every day at 8:30 PM
cron.schedule("15 7 * * *", async () => {
    try {
        const response = await axios.post("https://www.anuarchitect.com/api/sendLeads/?id=639");

        console.log("API fired:", response.data);

    } catch (err) {
        console.log(err.message);
    }
});