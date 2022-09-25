import styled from "styled-components";
export const LoginStyled = styled.div`
position: relative;
color: white;
text-align: center;
height: 100vh;

.image{
    padding-top: 4rem;
}
.image img{
    padding-top: 3rem;
    height: 50%;
    object-fit: cover;
    width: 50%;
    @media(min-width: 992px){
        height: 20%;
        width: 30%;
    }
}
.google{
    margin: 2rem auto;
    width: fit-content;
}
`