import { Table } from 'react-bootstrap';
import classes from './customTable.module.css';
import useData from '../hooks/data-hook';
import { useEffect } from 'react';
// import loadingGif from '../assets/waiting-texting.gif';

const CustomTable = () =>{
    const {isLoading,value,getTableData} =useData();

    useEffect( ()=>{
        getTableData();
    },[getTableData])

    if(isLoading){
        return (
            <Table className={`${classes.customTable} text-center`}>
                <thead>
                    <tr>
                        <th>...</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        )
    }
    if(!isLoading){
        return (
            <Table className={classes.customTable}>
                <thead>
                    <tr>
                        {value['headers'].map(( listValue, index ) => {
                            return (
                                <th>{listValue}</th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {value['data'].map(( listValue, index ) => {
                        return (
                        <tr key={index}>
                            <td>{listValue[0]}</td>        
                            <td>{listValue[1]}</td>        
                            <td>{listValue[2]}</td>        
                            <td>{listValue[3]}</td>        
                            <td>{listValue[4]}</td>        
                            <td>{listValue[5]}</td>        
                            <td>{listValue[6]}</td>        
                            <td>{listValue[7]}</td>  
                        </tr>
                    );
                    })}
                </tbody>
            </Table>
        )
    }
    
    
}

export default CustomTable;