import Specification from '../../model/SpecificationModel';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

class ListSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}
  execute(): Specification[] {
    return this.specificationsRepository.index();
  }
}

export default ListSpecificationUseCase;
