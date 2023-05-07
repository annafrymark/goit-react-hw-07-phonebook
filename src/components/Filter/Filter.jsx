import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { nanoid } from 'nanoid';
import css from './filter.module.css';
import PropTypes from 'prop-types';

const Filter = () => {
  const dispatch = useDispatch();
  const filterId = nanoid();

  const handleChange = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <div className={css.filterContainer}>
      <label className={css.filter}>
        Find contact by name
        <input
          className={css.inputFilter}
          id={filterId}
          type="search"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
