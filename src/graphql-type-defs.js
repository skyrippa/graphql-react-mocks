import {gql} from "@apollo/client";

export default gql`
    extend type Mission {
        sponsors: [String]
    }
    
    type Query {
        publications: [Publication]
    }
    
    type Mutation {
      addPublication(name: String!, url: String!): String
    }
  
    type Publication {
        name: String!
        url: String!
    }
`;