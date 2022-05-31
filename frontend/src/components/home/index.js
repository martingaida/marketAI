import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const changeRoute = () => {
        history.push('/main')
    };

    return (
        <>
            <div className='section home' id='0'>
                <h1 onClick={() => dispatch(changeRoute())}>market_AI</h1>
                <h2 className='subtitle' onClick={() => dispatch(changeRoute())}>enter the future</h2>
            </div>
        </>
    )
};

export default Home;