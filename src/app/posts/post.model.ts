export class Post {
  public id: string;
  public title: string;
  public content: string;
  public author: string;
  public date: string;
  public category: string;

  constructor(
    title: string,
    content: string,
    author: string,
    date: string,
    category: string,
    id?: string
  ) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.date = date;
    this.category = category;
    this.id = id || this.createId(title);

  }

  createId(title: string): string {
    return title.toLowerCase().replace(' ', '-');
  }
}