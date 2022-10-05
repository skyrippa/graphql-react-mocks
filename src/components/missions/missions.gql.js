import { gql } from '@apollo/client';

export default gql`{
  missions(limit: 10) {
    description
    id
    manufacturers
    name
    twitter
    website
    wikipedia
    sponsors @client
  }
}`
;