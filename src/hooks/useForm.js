
// Como no sabemos si se va a usar username, email etc el initialForm que tenemos como argumento
// lo mandamos al useState como valor inicial, entonces el formState va a ser igual a lo que sea que le mandemos como argumento

// En el return desestructuramos el formState 


import { useState } from "react";

const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const inputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };


  const onReset = () => {
    setFormState(initialForm)
  }

  return {
    ...formState,
    formState,
    inputChange,
    onReset,
  };
};

export default useForm;