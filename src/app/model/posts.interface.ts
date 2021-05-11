export interface Post{
    "name" : String, 
    "tagline": String,
    "topics" : Array<Topic>,
    "redirect_link" : String,
    "thumbnail" : String
}

interface Topic{
    "name" : String
}