import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import "./CharacterList.css";

export const CharactersList = () => {
  const { error, loading, data } = useCharacters();

  if (loading) return <div>Spinner...</div>;

  if (error) return <div>Something Went Wrong</div>;

  return (
    <div className="CharacterList">
      {data.characters.results.map((character) => {
        return (
          <div>
            <img src={character.image} />
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
};
