import React from 'react';
//css in js
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import {useNavigate, userNavigate, useSearchParams} from 'react-router-dom';

const Result = () => { 

    const navigate = useNavigate();
    const [searchParam] = useSearchParams();
    const text = searchParam.get('text');

    const [res,setRes] = React.useState("");

    React.useEffect(() => 
    {
        setRes(text);
        console.log('res: ', text);
    }, [text]);

    return (
        <Wrapper>
                <div>결과</div>
                <div>{res}</div>
                <Button style = {{fontFamily: "Pak_Yong_jun"}} 
                onClick = {() => navigate('/')}>다시 하기</Button>
        </Wrapper>
    )
}

export default Result;

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
`
