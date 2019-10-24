/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';

const PetItem = ({
  image,
  name,
  age,
  gender,
  color,
  breed,
  description,
  alt,
}) => (
  <>
    <h2>All about {name}</h2>
    <div>
      <img src={image} alt={alt} />
      <div>
        <p>
          Age: <span>{age}</span>
        </p>
        <p>
          Geder: <span>{gender}</span>
        </p>
        <p>
          Color: <span>{color}</span>
        </p>
        <span>
          Breed: <span>{breed}</span>
        </span>
      </div>
    </div>
    <p>{description}</p>
  </>
);

PetItem.defaultProps = {
  alt: `${PetItem.name}`,
};

PetItem.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  gender: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default PetItem;
