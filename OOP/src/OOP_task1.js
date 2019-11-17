class Course{
    constructor(courseName,themeName,questionName,answerName,correct){
        this.courses = {courseName: this.courseName=courseName, theme: [
            {themeName: this.themeName=themeName, question: [
                {questionName: this.questionName=questionName, answer: [
                    {answerName:this.answerName=answerName, correct: this.correct=correct}]
                }]
            }]
        };
    }
    addTheme(addTheme){
        if (addTheme != undefined){
            this.courses.theme.push({themeName: addTheme, question: [
                {questionName: null, answer: [
                    {answerName: null, correct: null}]}
                ]}
            )
        }
    }
    addQuestion(themeName, addQuestion){
        let themeAmount = this.courses.theme.length;
        for(themeAmount; themeAmount > 0; themeAmount--){
            if (themeName == this.courses.theme[themeAmount-1].themeName && addQuestion != undefined){
                this.courses.theme[themeAmount-1].question.push({questionName: addQuestion, answer: [
                    {answerName: null, correct: null}]}
                )
            }
        }
    }
    addAnswer(themeName, questionName, addAnswer, addCorrect){
        let themeAmount = this.courses.theme.length;
        for(themeAmount; themeAmount > 0; themeAmount--){
            if (themeName == this.courses.theme[themeAmount-1].themeName && addAnswer != undefined && addCorrect != undefined){
                let questionAmount = this.courses.theme[themeAmount-1].question.length;
                for(questionAmount; questionAmount>0; questionAmount--){
                    if (questionName == this.courses.theme[themeAmount-1].question[questionAmount-1].questionName)
                    this.courses.theme[themeAmount-1].question[questionAmount-1].answer.push({answerName: addAnswer, correct: addCorrect})
                }
            }
        }
    }
    deleteTheme(themeName){
        let themeAmount = this.courses.theme.length;
        for(themeAmount; themeAmount > 0; themeAmount--){
            if (themeName == this.courses.theme[themeAmount-1].themeName){
                this.courses.theme.splice(themeAmount-1, 1)
            }
        }
    }
    deleteQuestion(themeName, questionName){
        let themeAmount = this.courses.theme.length;
        for(themeAmount; themeAmount > 0; themeAmount--){
            if (themeName == this.courses.theme[themeAmount-1].themeName){
                let questionAmount = this.courses.theme[themeAmount-1].question.length;
                for(questionAmount; questionAmount>0; questionAmount--){
                    if (questionName == this.courses.theme[themeAmount-1].question[questionAmount-1].questionName)
                    this.courses.theme[themeAmount-1].question.splice(questionAmount-1, 1)
                }
            }
        }
    }
    deleteAnswer(themeName, questionName, answerName){
        let themeAmount = this.courses.theme.length;
        for(themeAmount; themeAmount > 0; themeAmount--){
            if (themeName == this.courses.theme[themeAmount-1].themeName){
                let questionAmount = this.courses.theme[themeAmount-1].question.length;
                for(questionAmount; questionAmount>0; questionAmount--){
                    if (questionName == this.courses.theme[themeAmount-1].question[questionAmount-1].questionName){
                        let answerAmount = this.courses.theme[themeAmount-1].question[questionAmount-1].answer.length
                        for(answerAmount; answerAmount>0; answerAmount--){
                            if(answerName == this.courses.theme[themeAmount-1].question[questionAmount-1].answer[answerAmount-1].answerName)
                            this.courses.theme[themeAmount-1].question[questionAmount-1].answer.splice(answerAmount-1, 1)
                        }
                        
                    }
                }
            }
        }
    }
}

let backEndCourse = new Course ("Back-end dev", "console", "Which command can change directory?", "cd", true);
backEndCourse.addTheme("js");
backEndCourse.addTheme("abc");
backEndCourse.addQuestion("console", "Which command add new file?");
backEndCourse.addQuestion("js", "How can you add array?");
backEndCourse.addAnswer("console", "Which command can change directory?", "rm", false);
backEndCourse.addAnswer("console", "Which command can change directory?", "touch", false);
backEndCourse.addAnswer("console", "Which command can change directory?", "mkdir", false);
backEndCourse.addAnswer("console", "Which command can change directory?", "mkdir1", false);
backEndCourse.addAnswer("js", "How can you add array?", "let a = []", true);
backEndCourse.addAnswer("js", "How can you add array?", "let a = {}", false);
backEndCourse.addAnswer("js", "How can you add array?", "let a = new Array[]", false);
backEndCourse.addAnswer("js", "How can you add array?", "let a = new Array()", true);
backEndCourse.deleteTheme("abc");
backEndCourse.deleteQuestion("js", null);
backEndCourse.deleteQuestion("console", null);
backEndCourse.deleteAnswer("js", "How can you add array?", null);
backEndCourse.deleteAnswer("console", "Which command add new file?", null);
backEndCourse.deleteAnswer("console", "Which command can change directory?", "mkdir1");

console.log(backEndCourse.courses.theme);
console.log(backEndCourse.courses.theme[0]);

module.exports = backEndCourse;
