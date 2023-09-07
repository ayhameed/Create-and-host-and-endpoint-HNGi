const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("dotenv").config();
const port = process.env.PORT || 4000  

// enable cors
app.use(cors())

//create endpoints

app.get ('/', (req, res)=> {
    //create js object (json)
    data_json = {
        "slack_name": "example_name",
        "current_day": "Monday",
        "utc_time": "2023-08-21T15:04:05Z",
        "track": "backend",
        "github_file_url": "https://github.com/ayhameed/Create-and-host-and-endpoint-HNGi/",
        "github_repo_url": "https://github.com/ayhameed/Create-and-host-and-endpoint-HNGi",
        "status_code": "200"
        }

})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })


