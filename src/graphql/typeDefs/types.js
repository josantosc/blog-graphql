const typeDefs = `
   type Query {
        greeting(name: String): String!
        users(query: String):[User!]!
        getMyPosts: User!
        post(query: String):[Post!]!
    }

    type User{
        id: ID!
        name: String!
        email: String!
        age: Int
        posts:[Post!]!
    }

    type Post{
        id:ID!
        title:String!
        body:String!
        published:Boolean!
        author: User!
    }`;
