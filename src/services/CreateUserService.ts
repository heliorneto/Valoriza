import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserCreate {
    name: string,
    email: string,
    admin?: boolean
}

export class CreateUserService {
    async execute({name, email, admin}: IUserCreate) {
        const userRepositories = new UsersRepositories();

        if(!email) {
            throw new Error("Email incorrect");
        }

        const UserAlreadyExists = await userRepositories.findOne({
            email
        });

        if(UserAlreadyExists) {
            throw new Error("User Already Exists");
        }

        const user = userRepositories.create({
            name,
            email,
            admin
        });

        await userRepositories.save(user);

        return user;
    }
}