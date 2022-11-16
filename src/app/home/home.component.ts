import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArticleService } from '../article.service';
import { Article } from '../articles';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})



export class HomeComponent implements OnInit {

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



  public onOpenModal(article: Article, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addArticlesModal');
    }
    if (mode === 'edit') {
      this.editArticle = article;
      button.setAttribute('data-target', '#updateArticlesModal');
    }
    if (mode === 'delete') {
      this.deleteArticle = article;
      button.setAttribute('data-target', '#deleteArticlesModal');
    }
    // container.appendChild(button);
    container?.appendChild(button);
    button.click();
  }



}
