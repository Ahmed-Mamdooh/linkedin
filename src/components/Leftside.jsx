import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
function Leftside(props) {
    return (
        <Container>
    <div>
                <Artcard>
                <Userinfo>
                    <Cardbackground />
                    <a>
                        <Photo />
                        <Link>
                            Welcome, {props.user ? props.user.displayName :"here"}
                        </Link>
                    </a>
                    <a>
                        <AddphotoText>Add a photo</AddphotoText>
                    </a>
                </Userinfo>
                <Widget>
                    <a>
                        <div>
                            <span>Connections</span>
                            <span>Grow your newtwork</span>
                        </div>
                        <img src="/images/widget-icon.svg"/>
                    </a>
                </Widget>
 <Item>
    <span>
        <img src="/images/item-icon.svg"/>
        My Items
    </span>
 </Item>
            </Artcard>
 <Communitycard>
    <a>
        <span>Groups</span>
    </a>
    <a>
        <span>
            Events
            <img src="/images/plus-icon.svg" alt=""/>
        </span>
    </a>
    <a>
        <span>Follows Hashtages</span>
    </a>
    <a>Discover more</a>
 </Communitycard>
    </div>
        </Container>
    )
}
const Container = styled.div`
grid-area: leftside;
// width: 100%;
> div{
    @media(min-width: 992px){
        position: fixed;
    }
}
`
const Artcard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
transition: box-shadow .1s;
position: relative;
border: none;
box-shadow: 0 0 2px rbg(0 0 0 / 15%), 0 0 0 rgb(0 0 0 . 20%)
`
const Userinfo = styled.div`
border-bottom: 1px solid rgba(0,0,0, 0.15);
padding: 12px 12px 16px;
word-wrap: break-word;
word-break: break-word;
`
const Cardbackground = styled.div`
background: url("/images/card-bg.svg");
background-position: center;
background-size: 462px;
height: 54px;
margin: -12px -12px 0;
`
const Photo = styled.div`
box-shadow: none;
background-image: url("/images/photo.svg");
width: 72px;
height: 72px;
box-sizing: border-box;
background-clip: content-box;
background-color: white;
background-position: center;
background-size: 60%;
background-repeat: no-repeat;
border: 2px solid white;
margin: -38px auto 12px;
border-radius: 50%
`
const Link = styled.div`
font-size: 16px;
line-height: 1.5;
color: rgba(0,0,0, 0.9);
font-weight: 600;
`
const AddphotoText = styled.div`
color: #0a66c2;
margin-top: 4px;
font-size: 12px;
line-height: 1.33;
font-weight: 400 
`
const Widget = styled.div`
border-bottom: 1px solid rgba(0,0,0,0.15);
padding: 12px;
font-weight: 600;
padding-bottom: 12px;
 > a {
    cursor: pointer;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;
    &:hover{
        background-color: rgba(0,0,0, 0.08 )
    }
    div{
        display: flex;
        flex-direction: column;
        text-align: left;
span{
font-size: 12px;
line-height: 1.33;
&:first-child{
    color: rgba(0,0,0, 0.6);
}
&:nth-child(2){
    color: rgba(0,0,0,1)
}
}
}
}
svg{
    color: (0,0,0,1)
}
`
const Item = styled.a`
border-color: rgba(0,0,0, 0.8);
text-align: left;
padding: 12px;
font-weight: 600;
font-size: 12px;
display: block;
span{
    display: flex;
    align-items: center;
    color: rgba(0,0,0, 1);
    svg{
        color: rgba(0,0,0, 0.6)
    }
}
&:hover{
        color: rgba(0,0,0, 0.08)
}
`
const Communitycard = styled(Artcard)`
font-weight: 600;
padding: 8px 0 0;
text-align: left;
display: flex;
flex-direction: column;
a{
    cursor: pointer;
    color: black;
    padding: 4px 12px;
    font-size: 12px;
    &:hover{
        color: #0a66c2;
    }
}
span{
    display: flex;
    align-items: center;
    justify-content: space-between
}
a:last-of-type{
    color: rgba(0,0,0, 0.6);
    text-decoration: none;
    border-top: 1px solid #d6cec2;
    padding: 12px;
    &:hover{
        background-color: rgba(0,0,0, 0.08)
    }
}

@media (min-width: 1128px){
    height: 220px
}
`
const mapStateToProps = (state)=>{
    return {
        user: state.userState.user
    }
}
export default connect(mapStateToProps)(Leftside)