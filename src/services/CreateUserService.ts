import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs";

interface IUserCreate {
    name: string,
    email: string,
    password: string,
    admin?: boolean
}

export class CreateUserService {
    async execute({name, email, password, admin}: IUserCreate) {
        const userRepositories = getCustomRepository(UsersRepositories);

        if(!email) {
            throw new Error("Email incorrect");
        }

        const UserAlreadyExists = await userRepositories.findOne({
            email
        });

        if(UserAlreadyExists) {
            throw new Error("User Already Exists");
        }

        const passwordHash = await hash(password, 8);

        const user = userRepositories.create({
            name,
            email,
            password: passwordHash,
            admin
        });

        await userRepositories.save(user);

        return user;
    }
}