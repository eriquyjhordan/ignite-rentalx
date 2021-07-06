import { Router } from 'express';
import multer from 'multer';

import createCategoryController from '../modules/Cars/useCases/CreateCategory';
import importCategoriesControlller from '../modules/Cars/useCases/ImportCategories';
import listCategoriesController from '../modules/Cars/useCases/ListCategories';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.post(
  '/imports',
  upload.single('file'),
  (request, response) => {
    return importCategoriesControlller.handle(request, response);
  },
);

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
