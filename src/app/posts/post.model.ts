export class Post {
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
    category: string
  ) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.date = date;
    this.category = category
  }
}