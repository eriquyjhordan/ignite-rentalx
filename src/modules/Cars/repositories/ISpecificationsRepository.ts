import Specification from '../model/SpecificationModel';

interface ISpecificationsDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ description, name }: ISpecificationsDTO): void;
  findByName(name: string): Specification;
  index(): Specification[];
}

export { ISpecificationsRepository, ISpecificationsDTO };
