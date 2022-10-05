import React from 'react';
import './App.css';
import { useState } from 'react';

const animeList = {
  SHOUNEN: [
    {
      description:
        ' Shounen refers to the demographic that this type of anime targets, which is male viewers around the age range of 10-18. These shows are usually a combination of action and adventure and are typically adapted from serial manga series. As such, these anime tend to have lengthy runs. One Piece currently has over 800 episodes and is still running. These shows are typically the most popular with mainstream audiences. They have done very well when exported to foreign markets thanks to their relatively simple plots and focus on action.',
    },
    {
      name: 'Naruto',
      rating: '( 5/5 rating ⭐⭐⭐⭐⭐ )',
    },
    {
      name: 'One Piece',
      rating: ' ( 5/5 rating ⭐⭐⭐⭐ ⭐)',
    },
    { name: 'Death Note', rating: ' ( 5/5 rating ⭐⭐⭐⭐⭐)' },
  ],

  SPORTS: [
    {
      description:
        'Pretty much self-explanatory, sports anime are shows that cover characters engaging in athletic competition. Popular choices in this category includes basketball, tennis, baseball, and soccer. Other sports exists as well (including those that you wouldn’t expect showing up in anime). As time goes on, more and more of these series are produced. Just like real sports, shows in this subgenre are action-packed!',
    },
    {
      name: 'Haikyuu',
      rating: ' ( 5/5 rating ⭐⭐⭐⭐⭐)',
    },
    { name: 'Yowamushi Pedal', rating: '( 5/5 rating ⭐⭐⭐⭐⭐)' },
    {
      name: "Kuroko's Basketball",
      rating: '( 5/5 rating ⭐⭐⭐⭐⭐)',
    },
  ],
  ISEKAI: [
    {
      description:
        'Isekai translates to another world. This subgenre typically has a narrative where a protagonist somehow gets transported to a different world. The new world is more often than not in a fantasy setting, occasionally with traits pulled from JRPG games.This category of anime exploded during the 2010s and arguably dominated the decade. A good portion of isekai anime is adapted not from manga but rather from light novels. The most popular series in this subgenre may be Sword Art Online. While the world featured there was just virtual reality, it did feature a fantasy setting that would be mimicked in other anime.The type of anime has become so prevalent that there is actually a backlash against it now. Story contests in Japan have actually banned isekai stories from being submitted just because of how saturated the market has become with it.',
    },
    { name: 'Gate', rating: '( 5/5 rating ⭐⭐⭐⭐⭐ )' },
    { name: 'Re: Zero', rating: '( 5/5 rating ⭐⭐⭐⭐⭐)' },
    { name: 'Sword Art Online', rating: '( 5/5 rating ⭐⭐⭐⭐⭐)' },
  ],
};

export default function App() {
  const [selectedGenre, setGenre] = useState('SHOUNEN');
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <React.Fragment>
      <div className='App'>
        <h1 style={{ textAlign: 'center' }}>⛩️ Anime Suggestions ⛩️</h1>
        <p style={{ fontSize: 'medium', textAlign: 'center' }}>
          {' '}
          Checkout my favorite anime. Select a genre to get started{' '}
        </p>

        <div style={{ textAlign: 'center' }}>
          {Object.keys(animeList).map((genre) => (
            <button
              onClick={() => genreClickHandler(genre)}
              style={{
                cursor: 'pointer',
                backgroundColor: 'skyblue',
                borderRadius: '0.3rem',
                fontWeight: '600',
                padding: '0.7rem  1.3rem',
                border: '1px solid black',
                margin: '1rem 0.5rem',
              }}
            >
              {genre}
            </button>
          ))}
        </div>
        <div>
          <ul style={{ paddingInlineStart: '0' }}>
            {animeList[selectedGenre].map((anime) => (
              <li
                key={anime.name}
                style={{
                  listStyle: 'none',
                  backgroundColor: '#6bfaff',
                  padding: '1rem 0.7rem',
                  width: '70%',
                  border: '1px solid grey',
                  margin: '1rem auto',
                  borderRadius: '0.5rem',
                }}
              >
                {anime.description != undefined && (
                  <div>{` ${anime.description} `}</div>
                )}

                {anime.name != undefined && (
                  <div style={{ fontSize: 'larger', textAlign: 'left' }}>
                    {` ${anime.name} `}
                  </div>
                )}
                 {anime.rating != undefined && (
                <div style={{ fontSize: 'smaller', textAlign: 'right' }}>
                  {` ${anime.rating} `}
                </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
