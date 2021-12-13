import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from './Header';
import './Help.css';




const url ='https://playground.nordsec.com/v2/worst-psw.json';

const HelpMain = () => {



    const [data, setData] = useState(null);



    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, []);


    console.log(data);

    if (!data) return null
    

    return (
        <div className="help">
            <div className="help-header">
                <Header title={'Top Leaked passwords'} />
            </div>
            
            <div className="help-top">
                <h6>Password</h6>
                <select defaultValue={'DEFAULT'}>
                    <option className='count-btn' value="DEFAULT">Count</option>
                    <option value="10"> 10 </option>
                    <option value="30"> 30 </option>
                    <option value="50">50</option>
                </select>
            </div>
            
            <div className="pass">
                <p><span> 1.</span>{data.passwords[0].value}</p>
                <p>{data.passwords[0].count}</p>   
            </div>
            <div className="pass">
                <p><span> 2.</span>{data.passwords[1].value}</p>
                <p>{data.passwords[1].count}</p>
            </div>
            <div className="pass">
                <p><span> 3.</span>{data.passwords[2].value}</p>
                <p>{data.passwords[2].count}</p>
            </div>
            <div className="pass">
                <p><span> 4.</span>{data.passwords[3].value}</p>
                <p>{data.passwords[3].count}</p>
            </div>
            <div className="pass">
                <p><span> 5.</span>{data.passwords[4].value}</p>
                <p>{data.passwords[4].count}</p>
            </div>
            <div className="pass">
                <p><span> 6.</span>{data.passwords[5].value}</p>
                <p>{data.passwords[5].count}</p>
            </div>
            <div className="pass">
                <p><span> 7.</span>{data.passwords[6].value}</p>
                <p>{data.passwords[6].count}</p>
            </div>
            <div className="pass">
                <p><span> 8.</span>{data.passwords[7].value}</p>
                <p>{data.passwords[7].count}</p>
            </div>
            <div className="pass">
                <p><span> 9.</span>{data.passwords[8].value}</p>
                <p>{data.passwords[8].count}</p>
            </div>
            <div className="pass">
                <p><span> 10.</span>{data.passwords[9].value}</p>
                <p>{data.passwords[9].count}</p>
            </div>
               
            <button className='help-btn'>Show all 50</button>
        </div>
        
    )
}


export default HelpMain;