import React from 'react'
import styled from 'styled-components';


const LoginStyle = styled.section`
 margin-top: 20px;
`

const Auth = () => {
    return (
        <div>
            <LoginStyle>
            <button className="btn btn-info">Login</button>
            </LoginStyle>
        </div>
    )
}

export default Auth
