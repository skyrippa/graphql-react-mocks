import {gql} from "@apollo/client";

export default gql`
    mutation addPublication(
        $name: String!,
        $url: String!
    ) {
      addPublication(
            name: $name,
            url: $url
        ) @client
    }
`;