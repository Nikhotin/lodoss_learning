const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const timeout = require('connect-timeout');
const User = require('./api/v1/models/aunthenticate-model');
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');

const indexRouter = require('./routes/index');
const featuresRouter = require('./routes/features');
const newsRouter = require('./routes/news');
const notesRouter = require('./api/v1/notes');
const usersRouter = require('./api/v1/users');
const hashtagsRouter = require('./api/v1/hashtags');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(timeout('5s'));
app.use(haltOnTimedout);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(haltOnTimedout);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));

function haltOnTimedout (req, res, next) {
  if (!req.timedout) next()
}

app.use('/', indexRouter);
app.use('/notes', notesRouter);
app.use('/news', newsRouter);
app.use('/features', featuresRouter);
app.use('/users', usersRouter);
app.use('/hashtags', hashtagsRouter);

app.get('/error', (req, res) => res.json({ message: 'error logging in' }));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({
      where:{
        name: username
      } }).then(user => {
      if (!user) { return done(null, false); }
      if (password !== user.password) { return done(null, false); }
      return done(null, user);
    });
  }
));

app.post('/', 
  passport.authenticate('local', { failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/users/'+req.user.id);
  });

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

app.use

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
