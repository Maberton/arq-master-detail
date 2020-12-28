import { Component, OnInit } from '@angular/core';
import { Category } from "../shared/category.model";
import { CategoryService } from "../shared/category.service";
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.categoryService.getAll()
      .subscribe((retorno: Category[]) => {
        this.categories = retorno;
      },
      erro => alert('Erro ao carregar a lista: '))
  }

  confirmaDelecao(categoria: Category): void {
    this.confirmationService.confirm({
      message: `Confirma deleção da categoria ${categoria.id} - ${categoria.nome}`,
      accept: (acc) => {
        this.categoryService.delete(categoria.id)
        .subscribe(
          () => this.categories = this.categories.filter(element => element != categoria),
          () => alert("Erro ao excluir!")
        )
      },
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
  });
  }

}
