import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { csrfFetch } from '../../store/csrf';

const Main = () => {
    const dispatch = useDispatch();
    
    const [instrument, setInstrument] = useState('');
    const [generatedText, setGeneratedText] = useState('');
    const [loading, setLoading] = useState(false);

    const promptInput = `Write current price of ${instrument} stock, whether it increased or decreased this week, how it performed compared to S&P500 and whether it's a buy, hold or sell`;

    useEffect(() => {

    },[promptInput, instrument])

    const callOpenAI = (prompt) => async (dispatch) => {
        const response = await csrfFetch('/api/textGen/new', {
            method: 'POST',
            body: JSON.stringify({
                prompt
            })
        })
        const data = await response.json()
        
        return (setLoading(false), setGeneratedText(data))
    }

    return (
        <>
            <div className='section main' id='0'>
                <div className='main-content'>
                    <p className='info'>GPT-3</p>
                    <p className='info'>engine: text-davinci-002</p>
                    <p className='info'>temperature: 0.6</p>
                    <p className='info'>output: 1</p>
                    <p className='info'>best of: 100</p>
                    <p className='info'>Prompt:</p>
                    <p className='input-prompt'>{promptInput}</p>
                    {/* <input className='input-prompt' type='text' value={promptInput} placeholder='Prompt' onChange={(e) => setPromptInput(e.target.value)}></input> */}
                    <input className='input-instrument' type='text' value={instrument} placeholder='Stock' onChange={(e) => setInstrument(e.target.value)}/>
                    <button className='btn primary' onClick={() => dispatch(callOpenAI(promptInput), setLoading(true), setGeneratedText(''))}>GENERATE</button>
                    {loading && <div className='loading-container'>
                        <div class='loading'><div></div><div></div><div></div><div></div></div>
                    </div>}
                    {generatedText && <>
                        <p className='info'>Result:</p>
                        <span/>
                    </>}
                    <p className='generated-text'>{generatedText}</p>
                    <p className='footnote'>Martin Gaida 2022</p>
                </div>
            </div>
        </>
    )
};

export default Main;