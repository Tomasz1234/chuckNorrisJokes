import { HttpClient } from '@angular/common/http';
import { Component, Output, EventEmitter , OnInit } from '@angular/core';


export class Joke{
  constructor(
    public type: string,
    public value: {
      id: number,
      joke: string,
      categories: []
    }
  ){}
}

export class Categories{
  constructor(
    public type: string,
    public value: []
  ){}
}


  @Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
  })

export class JokeComponent implements OnInit {
  joke: Joke;
  categoriesObject: Categories;
  categories: [];
  selectedCategory: string = '';
  selectedName: string = '';
  default: string = 'Impersonate Chuck Norris';
  // isImpersonated: boolean = false;

  message: string = this.selectedName;

@Output() messageEvent = new EventEmitter<string>();

  randomJoke(){
    this.displayJoke();
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.displayJoke();
    this.getCategory();
  }


  sendMessage($event) {
    this.messageEvent.emit($event.target.value);
  }

  displayJoke(){
    if(this.selectedCategory === ''){
    this.httpClient.get<any>('http://api.icndb.com/jokes/random').subscribe(
      Response => {
        this.joke = Response;
        this.selectedName === '' ? this.joke.value.joke = '"'+this.joke.value.joke.replace(/&quot;/g,'"')+'"' : this.joke.value.joke = ('"'+this.joke.value.joke.replace(/&quot;/g,'"')+'"').replace(/Chuck Norris/g, this.selectedName);
      }
    )
  }
  else{
        this.httpClient.get<any>('http://api.icndb.com/jokes/random?limitTo=['+this.selectedCategory+']').subscribe(
      Response => {
        this.joke = Response;
        this.selectedName === '' ? this.joke.value.joke = '"'+this.joke.value.joke.replace(/&quot;/g,'"')+'"' : this.joke.value.joke = ('"'+this.joke.value.joke.replace(/&quot;/g,'"')+'"').replace(/Chuck Norris/g, this.selectedName);
      }
    )
  }
  }

  getCategory(){
    this.httpClient.get<any>('http://api.icndb.com/categories').subscribe(
      Response => {
        this.categoriesObject = Response;
        this.categories = this.categoriesObject.value;
      }
    )
  }
}