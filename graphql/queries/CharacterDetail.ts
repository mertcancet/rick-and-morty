import { gql } from '@apollo/client';

const GET_CHARACTER_DETAIL = gql`
  query character($id: ID!) {
    character(id: $id) {
      id
      name
      status
      gender
      image
    }
  }
`;

export default GET_CHARACTER_DETAIL;
