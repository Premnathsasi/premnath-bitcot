import ContactView from "./components/ContactView";
import { ContactProvider } from "./context/ContactContext";
import "./App.css";

function App() {
  return (
    <ContactProvider>
      <ContactView />
    </ContactProvider>
  );
}

export default App;
