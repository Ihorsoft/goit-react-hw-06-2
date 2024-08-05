import { Layout } from "./Layout/Layout";

import { ContactsForm } from "./ContactsForm/ContactsForm";
import { ContactList } from "./ContactList/ContactList";
import { SearchBox } from "./SearchBox/SearchBox";
export const App = () => {
  return (
    <Layout>
      <h1>Phone books</h1>
      <ContactsForm />
      <SearchBox />
      <ContactList />
    </Layout>
  );
};
