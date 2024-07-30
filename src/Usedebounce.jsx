import {useEffect,useState} from "react";


export const useDebounce=(value,timeout){

    const [debouncevalue,setdebouncevalue] = useState[value];

    useEffect(()=> {
        
       let timeoutnumber= setTimeout(()=>{
            setdebouncevalue(value);
        },timeout)

        return ()=> {
            clearTimeout(timeoutnumber);//when ever the value changes clear the old clock first this will run
        }

    }, [value]);

    return debouncevalue;
    
};