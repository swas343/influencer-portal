import {useState} from 'react';
import tableStaticData from '../constants/tableData';

const useData = () => {
	const [value, setValue] = useState('...');
  	const [isLoading, setIsLoading] = useState(true);

  	const engagementScore = () =>{
        setIsLoading(true);
        setTimeout(function(){ 
            setValue(6.14);
            setIsLoading(false);
        }, 2000);
  	}
    
    const engagementComments = () =>{
        setIsLoading(true);
        setTimeout(function(){ 
            setValue(200);
            setIsLoading(false);
        }, 3000);
  	}

    const getStat = () =>{
        setIsLoading(true);
        setTimeout(function(){ 
            setValue(35);
            setIsLoading(false);
        }, 3000);
  	}
      
    const getTableData = () =>{
        const tableData = tableStaticData
        setIsLoading(true);
        setTimeout(function(){ 
            setValue(tableData);
            setIsLoading(false);
        }, 3000);
  	}  
  	

  	return {
  		value:value,
  		isLoading,
		engagementScore,
        engagementComments,
        getStat,
        getTableData
	};
}

export default useData;