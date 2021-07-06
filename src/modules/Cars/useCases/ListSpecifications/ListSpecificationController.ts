import { Request, Response } from 'express';

import ListSpecificationUseCase from './ListSpecificationUseCase';

class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    return response.status(200).json(this.listSpecificationUseCase.execute());
  }
}

export default ListSpecificationController;
