export class Task {
  title: string;
  description: string;
  done: boolean = false;

  constructor(title?: string, description?: string) {
    this.title = title;
    this.description = description;
  }
}
