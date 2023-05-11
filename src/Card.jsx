import React,{useState} from 'react';


const Card = ({amount}) =>{
    const [arr, setArr] = useState(new Array(amount).fill(true)); 
    //making an array of size amount and filling it by default true
    
    const countDowns = (arr) => {
        let downCount = 0;
        arr.forEach(item => {
            if(item === true) {
                ++downCount;
            }
        });
        return downCount;
    }

    const onClickHandler = (e, idx) =>{
        arr[idx] = !arr[idx]; //changing the boolean value here
        //console.log(arr)
        //console.log(countDowns(arr))
        if(countDowns(arr) === amount) { //counting the number of downs here then state will not be changed
            return;
        }
        setArr([...arr]);
    }
    return (
        <table>
    <tbody>
     <tr>
        {
            arr.map((item, idx) => {
             return <td style={{border: '1px solid black'}} id={idx} onClick={(e) => onClickHandler(e, idx)}> {item ? 'down' : 'up'} </td>})
        }
         {/* <td id='1' onClick={onClick}> 'down' </td>
         <td id='2' onClick={onClick}> 'down' </td>
         <td id='3' onClick={onClick}> 'down' </td>
         <td id='4' onClick={onClick}> 'down' </td> */}
     </tr>
    </tbody>
    </table>
    )
    
}

export default Card;