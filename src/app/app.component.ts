import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chuckNorrisJokes';
 Message:string;
 isImpersonated:boolean = false;

    receiveMessage($event) {  
        this.Message = $event  
        if(this.Message != ''){
          this.isImpersonated = true;
        }
        else{
          this.isImpersonated = false;
        }
    }


}
