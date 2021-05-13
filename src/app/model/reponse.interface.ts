import { Post } from "./posts.interface";

export interface ResponsePost{
    status : number,
    response : {
        date : string,
        results : Array<Post>,
        message : string
    }
}