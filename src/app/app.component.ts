import { Component } from '@angular/core';
import { NgForm }   from '@angular/forms';
     
export class Vopros_i_Otvet {
    Is: string;
    Ot: string[];
    constructor( Is: string, Ot: string[]) {
        this.Is = Is;
        this.Ot = new Array();
    }
}

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent { 
  
  public questions: Vopros_i_Otvet[] = QUESTIONS;
    
  addQuestion (Is: string, Ot: string[]) {
      this.questions.push(new Vopros_i_Otvet(Is, Ot));
    };
    
    selectedQuestion: Vopros_i_Otvet;
    onSelect(Vopros_na_Otvet: Vopros_i_Otvet) { 
        console.log(Vopros_na_Otvet);
        this.selectedQuestion = Vopros_na_Otvet;
        console.log(this.selectedQuestion);
     };

     addOtvet (Otv: string) {
    let i: any;
    for (i=0; i < this.questions.length; i++) {
      if (this.questions[i] == this.selectedQuestion) {
         this.questions[i].Ot.push(Otv);
         return (this.selectedQuestion.Ot);
      };
    };
              console.log(this.questions[i].Ot);
            };
};

var QUESTIONS: Vopros_i_Otvet[] = [];