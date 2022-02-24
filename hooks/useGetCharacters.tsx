import { useLazyQuery } from '@apollo/client';
import { GET_CHARACTERS } from 'graphql/queries';

const useGetCharacters = () => {
  const [getCharacters, { loading, error, data }] = useLazyQuery(GET_CHARACTERS);

  return {
    getCharacters,
    data,
    loading,
    error,
  };
};

export default useGetCharacters;
