const express = require('express')
const port = 8080;

const app = express()
app.set('port', port)

app.get('/', (req, res) => {
    res.send('hello')
});
app.use((err, req, res, next) => {
    res.json(err);
});
app.listen(app.get('port'), () =>
    console.log('Express server listening on port: ', app.get('port'))
);