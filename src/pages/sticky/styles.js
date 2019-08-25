import styled from 'styled-components';

export const StickyNote = styled.div`
    position: relative;
`;

export const Bar = styled.div`
    -webkit-app-region: drag;
    height: 32px; 
    background-color: darkviolet;
    padding: none;
    margin: 0px; 
    position: relative;
`;

export const Textarea = styled.div`
    width: 95%;
    height: 100%;
    border: none;
    resize: none;
    margin: 0;
    padding: 12px 5px;
    position: absolute;
`;

export const TitleButton = styled.button`
    -webkit-app-region: no-drag;
    position: fixed;
    top: 0px;
    right: 0px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    width: 46px;
    height: 32px;
    

    &:hover{
        box-shadow: 0 0 2px #3c6ed9;
    }
`;