import Category from '../../model/categoryModel';
import {
  ICategoriesRepository,
  ICategoriesRepositoryDTO,
} from '../ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private static categories: Category[];

  constructor() {
    CategoriesRepository.categories = [];
  }

  create({ name, description }: ICategoriesRepositoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    CategoriesRepository.categories.push(category);
  }

  index(): Category[] {
    return CategoriesRepository.categories;
  }

  findByName(name: string): Category {
    const findCategory = CategoriesRepository.categories.find(
      category =>
        category.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
    );
    return findCategory;
  }
}

export default CategoriesRepository;
