import { SpecificationModel } from "../../model/SpecificationModel";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../ISpecificationRepository";


class SpecificationsRepository implements ISpecificationRepository{
    private specifications: SpecificationModel[];

    private static INSTANCE: SpecificationsRepository;

    private constructor(){
        this.specifications = [];
    }

    public static getInstance(): SpecificationsRepository{
        if (!SpecificationsRepository.INSTANCE){
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();
        }

        return SpecificationsRepository.INSTANCE;
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specificationModel = new SpecificationModel();

        Object.assign({
            name,
            description,
            created_at: new Date()
        });

        this.specifications.push(specificationModel);
    }
    findByName(name: string): SpecificationModel {
        const specification = this.specifications.find(specification => specification.name === name);
        return specification;
    }


}

export { SpecificationsRepository }