import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface ICreateComplimentService {
    tag_id: string,
    user_sender: string,
    user_receiver: string,
    message: string
}

export class CreateComplimentService {
    async execute({tag_id, user_sender, user_receiver, message}: ICreateComplimentService) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const usersRepositores = getCustomRepository(UsersRepositories);

        if(user_sender === user_receiver) {
            throw new Error("Incorrect user receiver")
        }

        const userReceiverExists = usersRepositores.findOne(user_receiver);

        if(!userReceiverExists) {
            throw new Error("User receiver does not exists");
        }

        const compliment = complimentsRepositories.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        });

        await complimentsRepositories.save(compliment);

        return compliment
    }
}