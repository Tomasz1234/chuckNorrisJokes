import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';

export class JokeList{
  constructor(
    public type: string,
    public value: [
      {
        id: number,
        joke: string
      }
    ]
  ){}
}

@Component({
  selector: 'app-save-jokes',
  templateUrl: './save-jokes.component.html',
  styleUrls: ['./save-jokes.component.scss']
})
export class SaveJokesComponent implements OnInit {

  
  jokeList: JokeList;
  amount: number = 0;
  jokes: string = '';

  constructor(private httpClient: HttpClient) { };

  ngOnInit(): void {
  }


  
saveJokes() {
  this.httpClient.get<any>('http://api.icndb.com/jokes/random/'+this.amount).subscribe(
      Response => {
        this.jokeList = Response;
        this.jokeList.value.map((joke)=>{
          
          this.jokes = this.jokes.concat(joke.joke+"\n");
          
        })
        if(this.amount>0){
        const blob = new Blob([this.jokes],{type: "text/plain;charset=utf-8"})
          saveAs(blob, "chuck-norris-jokes.txt");
        }
      }
    )
  }
}