import { categoryModel } from '../model/categoryModel';

//DTO => Data Transfer object

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

interface ICategoriesRepository{
    findByName(name: string): categoryModel;
    list(): categoryModel[];
    create({name, description}: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };