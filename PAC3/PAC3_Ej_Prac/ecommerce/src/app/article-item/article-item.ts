import { Component } from '@angular/core';
import { Article } from '../models/article'

@Component({
  imports: [],
  selector: 'app-article-item',
  styleUrl: './article-item.css',
  templateUrl: './article-item.html',
})
export class ArticleItem {
  article: Article = {
    name: 'Motxilla Urbana Impermeable 25L',
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600',
    price: 54.95,
    isOnSale: true,
    quantityInCart: 1,
  };

incrementar(): void{
  this.article.quantityInCart++;
}
decrementar(): void {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
    }
  }
}
