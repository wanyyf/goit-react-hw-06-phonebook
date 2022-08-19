import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactActions';
const ContactItem = ({ name, tel, id }) => {
  const dispatch = useDispatch();
  return (
    <li>
      {name} {tel}{' '}
      <button
        type="button"
        className="button-2"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};
ContactItem.propTypes = {
  name: propTypes.string.isRequired,
  tel: propTypes.string.isRequired,
  deletebtn: propTypes.func.isRequired,
  id: propTypes.string.isRequired,
};
export default ContactItem;
