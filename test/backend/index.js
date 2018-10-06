const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
require('./routes/route')(app);
app.listen(4000, () => {
  console.log('Server listening on port 4000');
})
