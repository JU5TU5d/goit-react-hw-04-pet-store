/*eslint-disable*/
import React from 'react';
import PetsList from '../components/PetsList/PetsList';
import pets from '../assets/pets.json';

const PetsPage = () => (
  <div>
    <h2>Avaiable pets</h2>
    <PetsList items={pets} />
  </div>
);

export default PetsPage;
