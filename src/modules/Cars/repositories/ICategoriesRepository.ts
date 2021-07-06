import Category from '../model/categoryModel';

interface ICategoriesRepositoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category;
  index(): Category[];
  create({ name, description }: ICategoriesRepositoryDTO): void;
}

export { ICategoriesRepository, ICategoriesRepositoryDTO };
