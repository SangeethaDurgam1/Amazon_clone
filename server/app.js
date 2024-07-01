const express = require('express');
const app = express();
const authRouter = require('./routes/auth');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/amazon_clone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

app.use('/auth', authRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
