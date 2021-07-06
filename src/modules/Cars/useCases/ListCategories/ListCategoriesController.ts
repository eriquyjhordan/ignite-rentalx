import { Request, Response } from 'express';

import ListCategoryUseCase from './ListCategoriesUseCase';

class ListCategoriesController {
  constructor(private listCategoryUseCase: ListCategoryUseCase) {}
  handle(request: Request, response: Response): Response {
    return response.status(200).json(this.listCategoryUseCase.execute());
  }
}

export default ListCategoriesController;
