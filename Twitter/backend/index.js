const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;
const app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(cors())


require('./routes/route')(app)
app.listen(PORT, () => {
  console.log('Server listening port',PORT);
})
