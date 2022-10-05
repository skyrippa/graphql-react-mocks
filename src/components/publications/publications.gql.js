import {gql} from '@apollo/client'

export default gql`
  {
    publications @client {
      name
      url
    }
  }
`;