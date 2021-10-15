import {graphql, buildSchema} from "graphql";

const schema = buildSchema(`
type Query {
    foo: String
}
type Schema {
    query: Query
}
`);

const resolvers = {
    foo: () => 'bar',
}

const query = `
query FirstQuery {
    foo
}
`;

graphql(schema, query, resolvers)
.then((res) => console.log(res))
.catch((err)=>console.log(err));