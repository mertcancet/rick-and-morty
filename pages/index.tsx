import React from 'react';
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
  const { data, loading, error } = useGetCharacters();
  console.log(data, loading, error);
  return (
    <div className={styles.container}>
      {loading && 'Loading...'}
      {data?.characters.results.map((character: CharecterType) => (
        <div key={character.id}>
          <Link href={`/character/${character.id}`}>{character.name}</Link>
          <Image width={350} height={350} src={character.image} alt={character.name} />
        </div>
      ))}
    </div>
  );
};

export default Home;
