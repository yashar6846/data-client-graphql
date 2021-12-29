import React from "react";
import "./Character.css";
import { useCharacter } from "../hooks/useCharacter";
import { useParams } from "react-router-dom";

const Character = () => {
  const { id } = useParams();
  const { data, error, loading } = useCharacter(id);

  if (error) return <div>something Went Wrong</div>;

  if (loading) return <div>Spinner</div>;

  return (
    <div className="Character">
      <img src={data.character.image} width={500} height={500} />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="Character-episode">
          {data.character.episode.map((episode) => {
            return (
              <div>
                {episode.name} - <b>{episode.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Character;
