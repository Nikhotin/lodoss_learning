class Course {
  constructor(courseName) {
    this.courseName = courseName;
    this.theme = [];
  }

  addTheme(theme) {
    this.theme.push(theme);
  }
}

class Theme {
  constructor(themeName) {
    this.themeName = themeName;
    this.question = [];
  }

  addQuestion(question) {
    this.question.push(question);
  }
}

class Question {
  constructor(questionName) {
    this.questionName = questionName;
    this.answer = [];
  }

  addAnswer(answer) {
    this.answer.push(answer);
  }
}

class Answer {
  constructor(answerName, correct = false) {
    this.answerName = answerName;
    this.correct = correct;
  }
}

const backEnd = new Course('Back-end');
const js = new Theme('JS');
const oop = new Theme('OOP');
const cons = new Theme('Console');
const q1JS = new Question('How chtoto tam o JS?');
const q2JS = new Question('How chtoto tam o JS 2?');
const q1OOP = new Question('How chtoto tam o OOOOOOOP?');
const q2OOP = new Question('How chtoto tam o OOP 2?');
const q1Cons = new Question('How chtoto tam o console?');
const q2Cons = new Question('How chtoto tam o console 2?');
const ans1q1JS = new Answer('vern otvet', true);
const ans2q1JS = new Answer('nevern otvet');
const ans1q2JS = new Answer('vern otvet', true);
const ans2q2JS = new Answer('nevern otvet');
const ans1q1OOP = new Answer('nevern otvet');
const ans2q1OOP = new Answer('vern otvet', true);
const ans1q2OOP = new Answer('nevern otvet');
const ans2q2OOP = new Answer('vern otvet', true);
const ans1q1Cons = new Answer('vern otvet', true);
const ans2q1Cons = new Answer('nevern otvet');
const ans1q2Cons = new Answer('nevern otvet');
const ans2q2Cons = new Answer('nevern otvet');

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

console.log(backEnd.theme[2].question[0]);

module.exports = backEnd;
