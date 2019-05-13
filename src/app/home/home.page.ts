import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tasks = ['myllena', 'teste', 'elemento1'];
  // como declarar task aqui?
  addTask() {
    this.tasks.push(this.task);
  }

  deleteTask(i) {
    console.log('deletou');
    this.tasks.splice(i, 1);
  }
}
