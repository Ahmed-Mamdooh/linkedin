import React, { useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { signInAPI } from '../redux/actions'
import { useNavigate } from 'react-router-dom'
function Login(props) {
    const navigate = useNavigate()
    useEffect(()=>{
        props.user && navigate('/home')
    }, [props.user])
  return (
      <Container>
    
    <Nav>
<a href='index.html'>
  <img src='/images/home-logo.svg'/>
</a>
<div>
     {/* <Join>Join now</Join> */}
   <Sign onClick={()=> props.signIn()}>Sign in</Sign>
</div>
    </Nav>
    <Section>
        <Hero>
<h1>Welcome to your professional community</h1>
    <Google onClick={()=> props.signIn()}>
      <img src="/images/google.svg" alt="" />
    sign in with google  
</Google>
        </Hero>
<img src="/images/login-hero.svg" />
    </Section>
</Container>
  )
}
const Container = styled.div`
padding: 0;
margin:0 20px
`
const Nav = styled.nav`
max-width: 1128px;
z-index:2;
padding: 12px 0 16px;
display: flex;
align-items: center;
position: relative;
justify-content: space-between;
flex-wrap: nowrap;
& > a{
    width; 135px;
    height: 34px;
    text-decoration: none;
    color: blue;
    @media(max-width: 768px){
        padding: 0 5px
    }
}
`
// const Join = styled.a`
// font-size: 16px;
// padding: 10px 12px;
// text-decoration: none;
// border-radius: 4px;
// color: rgba(0,0,0,0.6);
// margin-right: 12px;
// cursor: pointer;
// &:hover{
//     background-color: rgba(0,0,0, 0.08);
//     color: rgba(0,0,0,0.9);
//     text-decoration: none
// }
// `
const Sign = styled.a`
box-shadow: inset 0 0 0 1px #0a66c2;
color: #0a66c2;
border-radius: 24px;
transition-duration: 167ms;
font-size: 16px;
font-weight: 600;
line-height: 40px;
padding: 10px 40px;
text-align; center
background-color: transparent;
cursor: pointer;
&:hover{
 background-color: rgba(112, 181, 249, 0.15);
 color: #0a66c2;
 text-decoration: none;
}
`
const Section = styled.section`
display: flex;
align-items: center
min-height: 700px;
max-width: 1128px;
position: relative;
padding: 40px 0 40 130px;
width: 100%;
@media(max-width: 767px){
    margin: auto;
    // min-height: 0px;
    flex-direction: column
}
> img{
  width: 100%;
    border-radius: 50%;
    margin: 10px auto;
    @media(min-width: 768px){
        width: 50%
        
    }
}
`
const Hero = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;
flex-direction: column;
h1{
    padding-bottom: 0;
    font-size: 45px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
}
@media(max-width: 767px){
 h1{
       text-align: center;
    font-size: 22px;
    width: 100%;
    line-height: 2;
 }
 button{
    margin: auto;
 }
}
`
const Google = styled.button`
    display: flex;
        align-items: center;
        justify-content; center;
        background-color: #fff;
        height: 56px;
        width: 100%;
        border-radius: 28px;
        box-shadow: inset 0 0 0 1px rgb(0 0 0 0 / 60%),
        inset 0 0 0 2px rgb(0 0 0 0 / 0%),
        inset 0 0 0 1px rgb(0 0 0 0 / 0%);
        verticle-align: middle;
        z-index: 0;
        transititon duration: 167ms;
        font-size: 20px;
        color: rgba(0,0,0, 0.6);
        &:hover{
            background-color: rgba(207, 207, 207, .25);
            color: rgba(0,0,0, 0.75)
        }
    gap: 10px;
    border: 1px solid #646cff;
background: transparent;
width: 280px;
justify-content: center;
   img{
        height: 50px;
    }
`
const mapStatetoProps = (state)=>{
    return{
        user: state.userState.user,
    articles: state.articleState.articles

    }
}
const mapDispatchtoProps = (dispatch)=>{
    return{
        signIn: ()=> dispatch(signInAPI())
    }
}
export default connect(mapStatetoProps, mapDispatchtoProps)(Login)