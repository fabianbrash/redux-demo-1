import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleAuth } from '../actions/authActions';


const mt = '1.25em';

const LoginStyle = styled.section`
 margin-top: ${mt};
`

const Auth = () => {
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch();

    const handleAuth = () => {
        //dispatch({type: "TOGGLE_AUTH"})
        dispatch(toggleAuth());
    }

    
    return (
        <div>
            <LoginStyle>
            <button onClick={handleAuth} className="btn btn-info">{auth.isLoggedIn ? "Logout" : "Login"}</button>
            </LoginStyle>
        </div>
    )
}

export default Auth
