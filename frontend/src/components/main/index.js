import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { csrfFetch } from '../../store/csrf';

const Main = () => {
    const dispatch = useDispatch();
    
    const [instrument, setInstrument] = useState('Apple');

    useEffect(() => {

    },[instrument])

    const callOpenAI = (prompt) => async (dispatch) => {
        const response = await csrfFetch('/api/textGen/new', {
            method: 'POST',
            body: JSON.stringify({
                prompt
            })
        })
        const data = await response.json()
        console.log(data)
        return setInstrument(data)
    }

    return (
        <>
            <div className='section main' id='0'>
                <div className='main-content'>
                    <input className='input-instrument' type='text' value={instrument} placeholder='Stock' onChange={(e) => setInstrument(e.target.value)}/>
                    <button className='btn primary' onClick={() => dispatch(callOpenAI(instrument))}>OK</button>
                </div>
            </div>
        </>
    )
};

export default Main;