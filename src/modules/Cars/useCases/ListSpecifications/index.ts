import SpecificationsRepository from '../../repositories/implementations/SpecificationsRepository';
import ListSpecificationController from './ListSpecificationController';
import ListSpecificationUseCase from './ListSpecificationUseCase';

const specificationRepository = new SpecificationsRepository();
const listSpecificationUseCase = new ListSpecificationUseCase(
  specificationRepository,
);
const listSpecificationController = new ListSpecificationController(
  listSpecificationUseCase,
);

export default listSpecificationController;
