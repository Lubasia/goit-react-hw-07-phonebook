import { Component } from 'react';
import { connect } from 'react-redux';

import phoneBookOperations from '../../redux/phoneBook/phoneBook-operations';
import phoneBookSelectors from '../../redux/phoneBook/phoneBook-selectors';

import ContactList from '../ContactList';
import Form from '../Form';
import Filter from '../Filter';
import Loader from '../Loader';

class Phonebook extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, isLoading } = this.props;
    return (
      <div>
        {isLoading && <Loader />}
        <h1> Phonebook ☎️ </h1>
        <Form />
        {isLoading && <Loader />}

        {contacts.length > 1 && <Filter />}
        {contacts.length > 0 && <ContactList />}
        {contacts.length === 0 && (
          <h3>
            {' '}
            No Contacts <span>🙁</span>{' '}
          </h3>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  contacts: state.contacts.items,
  isLoading: phoneBookSelectors.getLoading(state),
  error: phoneBookSelectors.getError(state),
});
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(phoneBookOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
