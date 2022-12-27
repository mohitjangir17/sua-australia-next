import { createContext } from "react";

const AppContext = createContext<{
  input: {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
  };
  setInput: React.Dispatch<React.SetStateAction<any>>;
}>({
  input: {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
  },
  setInput: () => {},
});

export default AppContext;
