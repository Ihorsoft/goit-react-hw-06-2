import { MdClose } from "react-icons/md";
import css from "./Contact.module.css";

import { useDispatch } from "react-redux";

import { deleteContact } from "../../redux/contactsSlice";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.wrapper}>
      <p className={css.text}>
        {contact.text} tel: {contact.telNumber}
      </p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
        {/* Delete */}
      </button>
    </div>
  );
};
