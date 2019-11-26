'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Course = function () {
  function Course(courseName) {
    _classCallCheck(this, Course);

    this.courseName = courseName;
    this.theme = [];
  }

  _createClass(Course, [{
    key: 'addTheme',
    value: function addTheme(theme) {
      this.theme.push(theme);
    }
  }]);

  return Course;
}();

var Theme = function () {
  function Theme(themeName) {
    _classCallCheck(this, Theme);

    this.themeName = themeName;
    this.question = [];
  }

  _createClass(Theme, [{
    key: 'addQuestion',
    value: function addQuestion(question) {
      this.question.push(question);
    }
  }]);

  return Theme;
}();

var Question = function () {
  function Question(questionName) {
    _classCallCheck(this, Question);

    this.questionName = questionName;
    this.answer = [];
  }

  _createClass(Question, [{
    key: 'addAnswer',
    value: function addAnswer(answer) {
      this.answer.push(answer);
    }
  }]);

  return Question;
}();

var Answer = function Answer(answerName) {
  var correct = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  _classCallCheck(this, Answer);

  this.answerName = answerName;
  this.correct = correct;
};

var backEnd = new Course('Back-end');
var js = new Theme('JS');
var oop = new Theme('OOP');
var cons = new Theme('Console');
var q1JS = new Question('How chtoto tam o JS?');
var q2JS = new Question('How chtoto tam o JS 2?');
var q1OOP = new Question('How chtoto tam o OOOOOOOP?');
var q2OOP = new Question('How chtoto tam o OOP 2?');
var q1Cons = new Question('How chtoto tam o console?');
var q2Cons = new Question('How chtoto tam o console 2?');
var ans1q1JS = new Answer('vern otvet', true);
var ans2q1JS = new Answer('nevern otvet');
var ans1q2JS = new Answer('vern otvet', true);
var ans2q2JS = new Answer('nevern otvet');
var ans1q1OOP = new Answer('nevern otvet');
var ans2q1OOP = new Answer('vern otvet', true);
var ans1q2OOP = new Answer('nevern otvet');
var ans2q2OOP = new Answer('vern otvet', true);
var ans1q1Cons = new Answer('vern otvet', true);
var ans2q1Cons = new Answer('nevern otvet');
var ans1q2Cons = new Answer('nevern otvet');
var ans2q2Cons = new Answer('nevern otvet');

q1JS.addAnswer(ans1q1JS);
q1JS.addAnswer(ans2q1JS);
q2JS.addAnswer(ans1q2JS);
q2JS.addAnswer(ans2q2JS);
q1OOP.addAnswer(ans1q1OOP);
q1OOP.addAnswer(ans2q1OOP);
q2OOP.addAnswer(ans1q2OOP);
q2OOP.addAnswer(ans2q2OOP);
q1Cons.addAnswer(ans1q1Cons);
q1Cons.addAnswer(ans2q1Cons);
q2Cons.addAnswer(ans1q2Cons);
q2Cons.addAnswer(ans2q2Cons);
js.addQuestion(q1JS);
js.addQuestion(q2JS);
oop.addQuestion(q1OOP);
oop.addQuestion(q2OOP);
cons.addQuestion(q1Cons);
cons.addQuestion(q2Cons);
backEnd.addTheme(js);
backEnd.addTheme(oop);
backEnd.addTheme(cons);

module.exports = backEnd;