// write your custom hook here to control your checkout form

import useLocalStorage from './useLocalStorage';

const useForm = (initialValues)=> {
    const [values, setValues] = useLocalStorage("form", initialValues);
  
    const handleChanges = e => {
      console.log(e.target.value);
      console.log(e.target.name);
      setValues({
        ...values,
        [e.target.name]:e.target.value
      });
    };
  
    const clearForm = e => {
      e.preventDefault();
      setValues(initialValues);
    };
  
    return([values, handleChanges, clearForm]);
  }

  export default useForm;