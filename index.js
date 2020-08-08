// GraphQLServer는 내부에 Express 프레임워크를 포함한다.
import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});

server.start({ port: 4001 }, () => console.log("Graphgl Server Running"));
