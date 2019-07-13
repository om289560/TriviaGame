function populate() {
    if (trivia.isEnded()) {

    }
    else {
        var element = document.getElementById("question");
        element.innerHTML =trivia.getElementById().text;


        var choices = trivia.getQuestionZone().choices;
            for (var i = 0; i<choices.length; i++) {
                var element = document.getElementById("choice" = i);
                element.innerHTML = choices[i];
            }
    }
}


var questions = [
    new Question(),
    new Question(),
    new Question(),
    new Question(),

]

var trivia = new Trivia(questions);

populate();










function Question(text, choices,answers) {
    this.tet=text;
    this.choices=choices:
    this.answer=answer:
}

question.prototype.correctAnswer=function(choice) {
    return choice === this.answer;   
}

function trivia(questions) {
    this.score= 0;
    this.questions= questions;
    this.question.Zone= 0;
}

trivia.prototype.getQuestionZone = function(){
    return this.question[this.questionZone];

}

trivia.prototype.isEnded = function(){
    return this.question.length === this.questionZone;

}

trivia.prototype.guess = function(answer){
    this.questionZone++;

    if(this.getQuestionZone() .correctAnswer(answer)) {
        this.score++;
    }
}



