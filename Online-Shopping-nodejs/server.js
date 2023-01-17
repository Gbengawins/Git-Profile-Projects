import express from 'express';
import path from 'path';
import userRoute from './server/routes/userRoute';
import productRoute from './server/routes/productRoute';
import orderRoute from './server/routes/orderRoute';
import uploadRoute from './server/routes/uploadRoute';
import db from './server/db';
import bodyParser from 'body-parser';
import { PAYPAL_CLIENT_ID } from './server/config';


const app = express();
app.use(bodyParser.json());
//console.log(process.env.JWT_SECRET_KEY);
app.use('./api/uploads', uploadRoute);
app.use('api', productRoute);
app.use('/api/users', userRoute);
app.use('/api/orders', orderRoute);
app.get('/api/config/paypal', (req, res) => {
  // console.log(PAYPAL_CLIENT_ID)
  res.send(PAYPAL_CLIENT_ID);
});

app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
// console.log(express.static(path.join(__dirname, '/./uploads')))
app.use(express.static(path.join(__dirname, '/client/build')));
app.get("*", (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

if (process.env.NODE_EVR === 'production') {
  app.use(express.static('./client/build'));
}

const PORT = process.env.PORT || 6001;
app.listen(PORT, () => {
  console.log(`Server running at port number: ${PORT}`);
});