import {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ContactContext = createContext();

function ContactProvider({ children }) {
  const [contactlists, setContactlists] = useState([]);
  const fetchContact = async () => {
    try {
      const res = await fetch(
        "https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json"
      );
      if (!res.ok) {
        throw new Error(`Error: ${res.status} ${res.statusText}`);
      }
      const data = await res.json();
      setContactlists(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchContact();
  }, []);

  const addContact = (data) => {
    setContactlists((prev) => [...prev, data]);
  };

  const deleteContact = (id) => {
    const newList = contactlists.filter((list) => list.id !== id);
    setContactlists(newList);
  };

  const editContact = (data) => {
    const updatelist = contactlists.map((list) =>
      list.id === data.id ? data : list
    );
    console.log(updatelist);
    setContactlists(updatelist);
  };

  return (
    <ContactContext.Provider
      value={{ contactlists, deleteContact, addContact, editContact }}
    >
      {children}
    </ContactContext.Provider>
  );
}

function useContact() {
  const context = useContext(ContactContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

export { ContactProvider, useContact };
