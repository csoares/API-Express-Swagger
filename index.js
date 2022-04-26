const express = require('express');
const cors = require("cors");
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');


app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));



var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions))

require('./endpoints')(app)

app.listen(5001, () => {
  console.log('Example app listening at http://localhost:5001')
})