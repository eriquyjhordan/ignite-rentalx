import { Router } from 'express';

import createSpecificationController from '../modules/Cars/useCases/CreateSpecification';
import listSpecificationController from '../modules/Cars/useCases/ListSpecifications';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationsRoutes.get('/', (request, response) => {
  return listSpecificationController.handle(request, response);
});

export { specificationsRoutes };
