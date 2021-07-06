import Category from '../../model/categoryModel';
import CategoriesRepository from '../../repositories/implementations/CategoriesRepository';

class ListCategoryUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}
  execute(): Category[] {
    return this.categoriesRepository.index();
  }
}

export default ListCategoryUseCase;
