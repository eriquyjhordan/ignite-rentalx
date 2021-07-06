import CategoriesRepository from '../../repositories/implementations/CategoriesRepository';
import ImportCategoriesControlller from './ImportCategoriesController';
import ImportCategoriesUseCase from './ImportCategoriesUseCase';

const categoriesRepository = new CategoriesRepository();
const importCategoriesUseCase = new ImportCategoriesUseCase(
  categoriesRepository,
);
const importCategoriesControlller = new ImportCategoriesControlller(
  importCategoriesUseCase,
);

export default importCategoriesControlller;
