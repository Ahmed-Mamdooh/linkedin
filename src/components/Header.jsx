import React from 'react'
import styled from 'styled-components'
import { signOutAPI } from '../redux/actions';
import {connect} from "react-redux"
function Header(props) {
  return (
    <Container>
        <Content>
            <Logo>
                <a href='/home'>
                    <img src='/images/home-logo.svg'/>
                </a>
            </Logo>
            <Search>
                <div>
                    <input type='text' placeholder='search'/>
                    <SearchIcon>
                      <img src="/images/search-icon.svg"/>
                    </SearchIcon>
                </div>
            </Search>
            <Nav>
                <NavListWrap>
                    <NavItem className='active'>
                            <a>
                                <img src="/images/nav-home.svg"/>
                                <span>Home</span>
                            </a>
                    </NavItem>
                    <NavItem>
                            <a>
                                <img src="/images/nav-jobs.svg"/>
                                <span>jobs</span>
                            </a>
                    </NavItem>
                    <NavItem>
                            <a>
                                <img src="/images/nav-network.svg"/>
                                <span>network</span>
                            </a>
                    </NavItem>
                    <NavItem>
                            <a>
                                <img src="/images/nav-messaging.svg"/>
                                <span>Messageing</span>
                            </a>
                    </NavItem>
                    <NavItem>
                            <a>
                                <img src="/images/nav-notifications.svg"/>
                                <span>Notifications</span>
                            </a>
                    </NavItem>
                   <User>
                             <a>
                                {props.user && props.user.photoURL ?
                            (<img src={props.user.photoURL}/>):
                            (<img src="/images/user.svg"/> )   
                            }
                                <span>Me
                                    <img src="/images/down-icon.svg"/>
                                </span>
                            </a>
<SignOut onClick={()=> props.signOut()}>
   <a> sign out</a>
</SignOut>
                   </User>
                   <Work>
                    <img src="/images/nav-work.svg"/>
                 <span>
                        work
                        <img src="/images/down-icon.svg"/>
                 </span>
                   </Work>
                </NavListWrap>
            </Nav>
        </Content>
    </Container>
  )
}
const Container = styled.div`
background-color: white;
border-bottom: 1px solid rgba(0,0,0, 0.08);
left: 0;
position: fixed;
top: 0;
width: 100vw;
z-index: 100;
padding: 15px
@media (min-width: 992px){
    padding: 0 24px;
    width: unset
}
`
const Content = styled.div`
display: flex;
align-items: center;
margin: 0 auto;
min-height: 100%;
max-width: 1128px;
    padding: 1em;
@media (min-width: 992px){
    padding: 0 24px;
}
`;
const Logo = styled.span`
    margin-right: 8px;
    font-size: 0;
    padding: 0 10px;
`;
const Search = styled.div`
opacity: 1;
flex-grow: 1;
position: relative;
> div{
    max-width: 280px;
    input{
        border: none;
        box-shadow: none;
        background-color: #eef3f8;
        border-radius: 2px;
        color: rgba(0,0,0, 0.9);
        width: 218;
        padding: 0 8px 0 40px;
        line-height: 1.75;
        font-weight: 400;
        font-size: 14px;
        height: 34px;
        // border-color: #dce6f1;
        vertical-align: text-top
    }
}`
const SearchIcon = styled.div`
width: 40px;
position: absolute;
z-index: 1;
top: 10px;
left: 2px;
border-radius: 0 2px 2px 0;
margin: 0;
pointer-events: none;
display: flex;
align-items: center;
justify-content: center;
`
const Nav = styled.nav`
margin-left: auto;
display: block;
// flex-grow: 1;
@media (max-width: 767px){
    position:fixed;
    left: 0;
    bottom: -1px;
    background: white;
    width: 100%;
}
`
const NavListWrap = styled.ul`
display: flex;
flex-wrap: nowrap;
list-style: none;
padding: 0 24px;
overflow-x: hidden;
.active{
    span::after{
        content: "";
        transform: scaleX(1);
        border-bottom: 2px solid black;
        bottom: 0;
        left: 0;
        position: absolute;
        transition: transform: 0.2s ease-in-out;
        width: 100%;
        border-color: rgba(0,0,0, 0.9)
    }
}
@media(min-width: 1128px){
    justify-content: right;
    margin-right: 30px;
}
`
const NavItem = styled.li`
display: flex;
align-items: center;
flex: 1;
cursor: pointer;
a{
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 60px;
    position: relative;
    text-decoration: none;
    img{
     width: 24px;
    height: 24px;
}
    span{
        display: none;
        color: rgba(0,0,0, 0.6);
        align-items: center  
    }
    @media(max-width: 767px){
        min-height: 70px;
    }
}
@media(min-width: 992px){
    min-width: 80px;
 a span{
      display: flex;
  }
}
&:hover, &:active{
    a{
        span{
            color: rgba(0,0,0,0.9)
        }
    }
}
`
const SignOut = styled(NavItem)`
position: absolute;
top: 55px;
background: white;
border-radius:  0 0 5px 5px;
width: 100px;
height: 40px;
font-size: 16px;
transition-duration: 167ms;
text-align: center;
display: none;
cursor: pointer
@media(max-width: 767px){
    top: 45px;
    position: absolute;
    left: 15px;
    background: #eee
}
`
const User = styled.div`
display: flex;
align-items: center;
flex: 1;
a{
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 60px;
    position: relative;
    text-decoration: none;
    img{
     width: 24px;
    height: 24px;
}
    span{
        display: none;
        color: rgba(0,0,0, 0.6);
        align-items: center  
    }
    @media(max-width: 767px){
        min-height: 70px;
    }
}
@media(min-width: 992px){
    min-width: 80px;
 a span{
      display: flex;
  }
}
&:hover, &:active{
    a{
        span{
            color: rgba(0,0,0,0.9)
        }
    }
}
a > svg{
    width: 24px;
    border-radius: 50%;
}
a > img{
     width: 24px;
    height: 24px;
    border-radius: 50%;
}
span{
    display: flex;
    align-items: center
}
&:hover{
    ${SignOut}{
margin-top: 5px;
    margin-left: -48px;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid #ccc;
    &:hover{
        background: #eee;
    }
    }
}
`
const Work = styled(User)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-left: 10px;
border-left: 1px solid rgba(0,0,0, 0.08);
@media(max-width: 575px){
    display: none
}
`;

const mapStateToProps = (state)=>{
    return{
        user: state.userState.user,
    }
}
const mapDispatchToProps = (dispatch)=>{
return{
    signOut: ()=> dispatch(signOutAPI())
}
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)