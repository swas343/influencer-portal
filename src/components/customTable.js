import { Table } from 'react-bootstrap';
import classes from './customTable.module.css';
import useData from '../hooks/data-hook';
import { useEffect } from 'react';
// import loadingGif from '../assets/waiting-texting.gif';

const CustomTable = () =>{
    const {isLoading,value,getTableData} =useData();

    useEffect( ()=>{
        getTableData();
    },[])

    if(isLoading){
        return (
            <Table className={`${classes.customTable} text-center`}>
                <thead>
                    <tr key="thead1">
                        <th key="loaderHead">...</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key="thead2">
                        <td key="loaderD"></td>
                    </tr>
                </tbody>
            </Table>
        )
    }
    
    return (
        <Table className={classes.customTable}>
            <thead>
                <tr key="thead">
                    {value['headers'].map(( listValue, index ) => {
                        return (
                            <th key={`Head${index}`}>{listValue}</th>
                        );
                    })}
                </tr>
            </thead>
            <tbody>
                {value['data'].map(( listValue, index ) => {
                    return (
                    <tr key={index}>
                        <td key={`0d`}>{listValue[0]}</td>        
                        <td key={`1d`}>{listValue[1]}</td>        
                        <td key={`2d`}>{listValue[2]}</td>        
                        <td key={`3d`}>{listValue[3]}</td>        
                        <td key={`4d`}>{listValue[4]}</td>        
                        <td key={`5d`}>{listValue[5]}</td>        
                        <td key={`6d`}>{listValue[6]}</td>        
                        <td key={`7d`}>{listValue[7]}</td>  
                    </tr>
                );
                })}
            </tbody>
        </Table>
    ) 
}

export default CustomTable;