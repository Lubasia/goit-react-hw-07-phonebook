import { connect } from 'react-redux';
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';
import phoneBookSelectors from '../../redux/phoneBook/phoneBook-selectors';
import style from '../Form/Form.module.css';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <label>
      Find contacts by name 🔍
      <input
        type="text"
        className={style.FormLabel}
        value={value}
        onChange={onChangeFilter}
        name="filter"
      />
    </label>
  );
};
const mapStateToProps = state => ({
  value: phoneBookSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: event =>
    dispatch(phoneBookActions.changeFilter(event.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
