import { Component, inject, OnInit } from '@angular/core';
import { EditinsertformComponent } from './features/crud/components/editinsertform/editinsertform.component';
import { Store } from '@ngrx/store';
import { User } from './features/crud/model';
import { loadUsers } from './features/crud/state/user.action';

@Component({
  selector: 'app-root',
  imports: [EditinsertformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular-19-crud-application';
  userStore = inject(Store<{ users: User[] }>);

  ngOnInit(): void {
    this.userStore.dispatch(loadUsers());
  }
}
