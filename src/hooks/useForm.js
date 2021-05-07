// write your custom hook here to control your checkout form
import {useState} from 'react';

const useForm = (key, initialValue) => {

    const [values, setValues] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      });

  
    const setValue = value => {
        setValues(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  
    return([values, setValue]);
}

export default useForm;