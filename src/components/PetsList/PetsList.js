/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import styles from './PetsList.module.css';

const PetsList = ({ items, match }) => (
  <ul className={styles.petsList}>
    {items.map(el => (
      <li key={el.id} className={styles.petsItems}>
        <Link to={`${match.path}/${el.id}`}>
          <h2 className={styles.title}>{el.name}</h2>
          <img src={el.image} alt={el.name} className={styles.img} />
        </Link>
      </li>
    ))}
  </ul>
);

PetsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  match: ReactRouterPropTypes.match.isRequired,
};

export default withRouter(PetsList);
