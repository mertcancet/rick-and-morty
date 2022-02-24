import { useQuery } from '@apollo/client';
import { GET_CHARACTER_DETAIL } from 'graphql/queries';

type UseGetCharacterByID = {
  id?: string | string[] | undefined;
};

const useGetCharacterByID = ({ id }: UseGetCharacterByID) => {
  const { loading, error, data } = useQuery(GET_CHARACTER_DETAIL, {
    variables: { id },
  });

  return {
    data,
    loading,
    error,
  };
};

export default useGetCharacterByID;
