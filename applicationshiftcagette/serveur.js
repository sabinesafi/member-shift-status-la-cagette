const express = require('express')
const https = require('https')
const app = express()

const AUTH = process.env.AUTH

https.get(`https://${AUTH}@lacagette-staging.trobz.com`,
    res => console.log(res.statusCode))


app.get('/', (req, res) =>
    res.send('Hello World!')
)

app.listen(3000, () =>
    console.log('Example app listening on port 3000!')
)