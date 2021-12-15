
import { categoryModel } from "../../model/categoryModel";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository{
    private categories: categoryModel[];

    private static INSTANCE: CategoriesRepository; //Vai ser do mesmo tipo da classe

    private constructor(){
        this.categories = [];
    }

    // Método que vai servir para criar uma instância ou repassar ela para frente, para quem estiver requisitando
    public static getInstance(): CategoriesRepository{

        if(!CategoriesRepository.INSTANCE){// Se não tiver nenhum valor/instância criada/atribuído a ele
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }

        return CategoriesRepository.INSTANCE; // Se já tiver uma instância criada
    }

    create({ description, name }: ICreateCategoryDTO): void {
        const category = new categoryModel();
        
        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        }); // Criando o objeto utilizando o assign
    
        this.categories.push(category);
    };

    list(): categoryModel[] {
        return this.categories;
    };

    findByName(name: string): categoryModel {
        const category = this.categories.find(category => category.name === name);
        return category;
    };
};

export { CategoriesRepository };