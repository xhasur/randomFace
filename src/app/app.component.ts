import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

ngOnInit() {
    const headers: Headers = new Headers();
   headers.append('Accept', 'application/json');
   headers.append('Content-Type', 'application/json');
   headers.append('Access-Control-Allow-Origin', '*');
}

}
