import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useGetCharacterByID } from 'hooks';

const CharacterPage: NextPage = () => {
  const router = useRouter();
  console.log(router.query.id);
  const { data, loading } = useGetCharacterByID({ id: router?.query?.id });
  console.log(data, loading);
  return (
    <div>
      {loading ? (
        'loading...'
      ) : (
        <div>
          <button onClick={() => router.back()}>Back</button>
          {data.character && (
            <div>
              {data?.character?.name}
              <div>
                <Image
                  src={data?.character?.image}
                  alt={data?.character?.name}
                  width={350}
                  height={350}
                />
              </div>
              {data.character.status}
              {data.character.gender}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CharacterPage;
