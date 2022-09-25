import styled from "styled-components";

export const ImageStyled = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: center;
border: .5px solid grey;

border-radius: 50%; 
width: ${({width})=>width};
height: ${({height})=>height};

img{
    width: ${({imgWidth, width})=>imgWidth || width};
    height: ${({imgHeight, height})=>imgHeight || height};
    border-radius: 50%; 
    
    
}

`