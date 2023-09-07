const express = require('express')
const cors = require('cors')
const jsonc = require('jsonc')
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("dotenv").config();
const port = process.env.PORT || 4000

// enable cors
app.use(cors())

// functions
dateFunction = () => {
    //get current day 
    day = new Date().getUTCDay()
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const todays_day = daysOfWeek[day]

    // utc time
    const now = new Date();
    const offsetMinutes = 2;

    // Calculate the adjusted time by adding or subtracting minutes
    now.setMinutes(now.getUTCMinutes() + offsetMinutes);

    // Format the date in "yyyy-MM-ddTHH:mm:ssZ" format
    const todays_time = now.toISOString().slice(0, 19) + "Z";

    // Return both values as an array
    return [todays_day, todays_time];
}

//create endpoints

app.get('/api', (req, res) => {

    // get parameters
    const slack_name = req.query.slack_name;
    const track = req.query.track;

    // status code 
    const statusCode = res.statusCode;
    //convert statuscode to string 
    const statusCodeString = statusCode.toString()
    //call date function
    const datevalues = dateFunction()

    // tests
    console.log(datevalues[0], datevalues[1]);
    console.log(slack_name, track);

    // Create the response object
    const responseObject = {
        "slack_name": slack_name,
        "current_day": datevalues[0].toString(),
        "utc_time": datevalues[1].toString(),
        "track": track,
        "github_file_url": "https://github.com/ayhameed/Create-and-host-and-endpoint-HNGi/blob/main/server.js",
        "github_repo_url": "https://github.com/ayhameed/Create-and-host-and-endpoint-HNGi",
        "status_code": statusCodeString
    }

    //response
    res.json(responseObject)
})

app.listen(port, () => {
    console.log('app listening on port ' + port)
})