/*eslint-disable*/
import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import pets from '../assets/pets.json';
import PetItem from '../components/PetItem/PetItem';

const getPetObj = id => pets.find(el => el.id === id);

const PetPage = ({ match, history }) => {
  const { id } = match.params;
  console.log(id);
  return (
    <div>
      <button type="button" onClick={() => history.push('/pets')}>
        Return
      </button>
      <PetItem {...getPetObj(id)} />
    </div>
  );
};

PetPage.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default PetPage;
