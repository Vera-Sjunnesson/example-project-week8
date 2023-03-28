import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Details = () => {
  const [details, setDetails] = useState({});
  const navigate = useNavigate();
  const { pokemonName } = useParams();

  const onBackButtonClick = () => {
    navigate(-1)
  }
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((res) => res.json()).then((data) => setDetails(data))
  }, [pokemonName])

  return (
    <div>
      <button type="button" onClick={onBackButtonClick}>Go back</button>
      <h2>{details.name}</h2>
      <img src={details.sprites ? details.sprites.other['official-artwork'].front_default : ''} alt="pokemon" />
    </div>
  )
}

export default Details