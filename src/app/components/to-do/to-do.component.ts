import { Component, OnInit } from "@angular/core";
import { Task } from "src/app/Models/task";

@Component({
  selector: "app-to-do",
  templateUrl: "./to-do.component.html",
  styleUrls: ["./to-do.component.scss"]
})
export class ToDoComponent implements OnInit {
  tasks = new Array<Task>();
  newTask = new Task();
  editMode = false;
  constructor() {}

  ngOnInit() {
    this.tasks.push(new Task("ONE", "Lorem ipsum"));
    this.tasks.push(new Task("TWO", "Dolor sit amet"));
    this.tasks.push(new Task("THREE", "Hello!"));
  }
  OnFormSubmit(): void {
    this.tasks.push(this.newTask);
    this.newTask = new Task();
  }
  onTsakClick(item: Task): void {
    item.done = !item.done;
  }
  onTaskDelete(item: Task): void {
    this.tasks = this.tasks.filter(x => x != item);
  }
  onTaskEdit(item: Task): void {
    this.newTask = item;
    this.editMode = true;
  }

  onDoneClick(): void {
    this.newTask = new Task();
    this.editMode = false;
  }
}
