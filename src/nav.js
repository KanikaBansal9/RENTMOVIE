import React from "react";
import styled from "styled-components";
const Navbar=styled.div`
    background-image: linear-gradient(to right, purple, rgb(109, 136, 186));
    color: white;
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
`;
const Title=styled.div`
    font-size: 20px;
    color: white;
    font-weight: 600;
    font-family:'Times New Roman',Times,serif;
    text-transform: uppercase;
    margin-left: 30px;
    &:hover{text-shadow: 2px 2px 4px #000000};
`;
const Cartcontainer=styled.div`
position:relative;
cursor:pointer;
`;
const Carticon=styled.img`
height:48px;
margin-right:30px;
`;
const Cartcount=styled.span`
background-color:${(props)=>props.color};
opacity:${(props)=>props.show?1:0};
border-radius:50%;
padding:4px 8px;
position:absolute;
right:10px;
font-size:12;
`;
class Nav extends React.Component{
    
    render(){
        let {cartCount}=this.props;
        return(
            <>
           <Navbar>
                <Title>RentMovie</Title>
                <Cartcontainer>
                    <Carticon alt="cart-icon" src="https://cdn-icons-png.flaticon.com/128/891/891462.png"></Carticon>
                   
                    <Cartcount color="purple" show={true}>{cartCount}</Cartcount>
                    
                </Cartcontainer>
                </Navbar>
            </>
        )
    }

}
export default Nav ;
