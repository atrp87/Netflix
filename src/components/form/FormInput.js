import { useContext } from 'react';
import { FormContext } from './Form';

export default function FormInput({ type = 'text', name, placeholder }) {

  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;

  return (
    <div className="FormInput">
      <label>
        <input
          type={type}
          value={form[name]}
          placeholder={placeholder}
          onChange={handleFormChange}
        />
      </label>
    </div>
  )
}
