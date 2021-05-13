export interface Post{
    "name" : string, 
    "tagline": string,
    "topics" : Array<Topic>,
    "redirect_link" : string,
    "thumbnail" : string
}

interface Topic{
    "name" : string
}