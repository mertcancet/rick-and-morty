import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from 'graphql/queries';

const useGetCharacters = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  return {
    data,
    loading,
    error,
  };
};

export default useGetCharacters;
