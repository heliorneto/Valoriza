import { NextFunction, Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";


export class ListUserReceiveComplimentsController {
    async handle(request: Request, response: Response, next: NextFunction) {
        const {user_id} = request;

        const listUserReceiveCompliments = new ListUserReceiveComplimentsService();

        const compliments = await listUserReceiveCompliments.execute(user_id);

        return response.json(compliments);
    }
}