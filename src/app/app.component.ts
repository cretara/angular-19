import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditinsertformComponent } from './features/crud/components/editinsertform/editinsertform.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EditinsertformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-19';
}
