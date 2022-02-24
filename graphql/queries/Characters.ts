import { gql } from '@apollo/client';

const GET_CHARACTERS = gql`
  query getCharacters($name: String!) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        image
      }
    }
  }
`;

export default GET_CHARACTERS;
