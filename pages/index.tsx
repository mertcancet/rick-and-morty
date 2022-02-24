import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { useGetCharacters } from 'hooks';
import styles from '../styles/Home.module.css';

type CharecterType = {
  id: number;
  name: string;
  image: string;
};

const Home: NextPage = () => {
  const [searchText, setSearchText] = useState('');
  const { getCharacters, data, loading } = useGetCharacters();

  useEffect(() => {
    getCharacters({ variables: { name: searchText } });
  }, []);

  return (
    <div>
      {loading ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        <div className={styles.container}>
          <h1>Wubba Lubba Dub Dub!</h1>
          <div>
            <input onChange={(e) => setSearchText(e.target.value)} />
            <button onClick={() => getCharacters({ variables: { name: searchText } })}>
              Search
            </button>
          </div>
          <div className={styles.wrapper}>
            {data?.characters.results.map((character: CharecterType) => (
              <div key={character.id} className={styles.character}>
                <Link href={`/character/${character.id}`} passHref>
                  <div>
                    {character.name}
                    <div className={styles['image-wrapper']}>
                      <Image
                        width={350}
                        height={350}
                        src={character.image}
                        alt={character.name}
                        className={styles.image}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
