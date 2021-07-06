import CategoriesRepository from '../../repositories/implementations/CategoriesRepository';
import ListCategoriesController from './ListCategoriesController';
import ListCategoryUseCase from './ListCategoriesUseCase';

const categoryRepository = new CategoriesRepository();
const listCategoriesUseCase = new ListCategoryUseCase(categoryRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase,
);

export default listCategoriesController;
