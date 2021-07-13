import csvParse from 'csv-parse';
import fs from 'fs';

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoriesUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {}

  readFile(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const importsCategories: IImportCategory[] = [];
      const stream = fs.createReadStream(file.path);
      const parseFile = csvParse();
      stream.pipe(parseFile);
      parseFile
        .on('data', async line => {
          const [name, description] = line;
          importsCategories.push({
            name,
            description,
          });
        })
        .on('end', () => resolve(importsCategories))
        .on('error:', err => reject(err));
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.readFile(file);
    categories.map(async category => {
      const { name, description } = category;
      const existCategory = this.categoryRepository.findByName(name);
      if (!existCategory) {
        this.categoryRepository.create({ name, description });
      }
    });
  }
}

export default ImportCategoriesUseCase;
