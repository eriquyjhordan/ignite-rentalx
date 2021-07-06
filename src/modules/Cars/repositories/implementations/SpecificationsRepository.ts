import Specification from '../../model/SpecificationModel';
import {
  ISpecificationsDTO,
  ISpecificationsRepository,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private static specifications: Specification[];

  private constructor() {
    SpecificationsRepository.specifications = [];
  }

  create({ description, name }: ISpecificationsDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    SpecificationsRepository.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const findSpecification = SpecificationsRepository.specifications.find(
      specification =>
        specification.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
    );
    return findSpecification;
  }

  index(): Specification[] {
    return SpecificationsRepository.specifications;
  }
}

export default SpecificationsRepository;
