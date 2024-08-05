import css from "./ContactsForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

export const ContactsForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const nameAndTel = {
      text: form.elements.text.value,
      telNumber: form.elements.telnumber.value,
    };

    dispatch(addContact(nameAndTel));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter User Name"
      />
      <input
        className={css.field}
        type="text"
        name="telnumber"
        placeholder="Enter tel Number "
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};
