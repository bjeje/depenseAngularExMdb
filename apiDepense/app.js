const createError = require('http-errors');
const express = require('express');
const morgan = require('morgan')
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const port = process.env.PORT || 4242;
const expressValidator = require('express-validator')

const auth = require('./middleware/auth');

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.urlencoded({ extended: true }))

const spentRouter = require('./routes/spent.routes');
const userRouter = require('./routes/user.routes');
const incomeRouter = require('./routes/income.routes');
const endMonthRouter = require('./routes/endMonth.routes');

app.use('/spent', auth.checkTokenMiddleware, spentRouter);
app.use('/user', userRouter);
app.use('/income', auth.checkTokenMiddleware, incomeRouter);
app.use('/endMonth', auth.checkTokenMiddleware, endMonthRouter);

app.set('view engine', 'pug');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1:27042/spent';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.listen(port, () => {
  console.log('Server app listening on port ' + port);
});

module.exports = app;
