import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';
import { Article } from './articles';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticleService]
})

export class AppComponent implements OnInit {
  title = 'blogApp';
  public articles: any;
  public editArticle: any;
  public deleteArticle: any;

  constructor(private articleService: ArticleService){}

  ngOnInit(): void {
    this.getArticles();
  }

  public getArticles(): void {
    this.articleService.getArticles().subscribe(
      (response: Article[]) => {
        this.articles = response;
        console.log(this.articles);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onAddArticle(addForm: NgForm): void {
    // document.getElementById('add-article-form').click();
    this.articleService.addArticles(addForm.value).subscribe(
      (response: Article) => {
        console.log(response);
        this.getArticles();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }


  public onUpdateArticle(article: Article): void {
    this.articleService.updateArticles(article).subscribe(
      (response: Article) => {
        console.log(response);
        this.getArticles();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }




}
