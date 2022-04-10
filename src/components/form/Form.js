import { useState } from 'react';
import React from 'react';

export const FormContext = React.createContext({
  form: {},
  handleFormChange: () => { }
});

export default function Form({ children, formInitialValues }) {
  const [form, setForm] = useState(formInitialValues);

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    const updatedForm = {
      ...form,
      [name]: value
    };

    // re-rendering each time an character is pressed ( useMemo || useCallback )
    console.log('changed: ', updatedForm);

    setForm(updatedForm);
  };

  return (
    <form className="Form">
      <FormContext.Provider value={{
        form,
        handleFormChange
      }}>
        {children}
      </FormContext.Provider>
    </form>
  )
}
