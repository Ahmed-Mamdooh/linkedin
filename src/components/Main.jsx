import React, { useEffect, useState } from 'react'
import {connect} from "react-redux"
import styled from "styled-components"
import Postmodal from './Postmodal';
import ReactPlayer from 'react-player';
import { getArticlesAPI } from '../redux/actions';
function Main(props) {
  const [show, setShow] = useState(false);
  function toggleShow(){
    setShow(!show)
  }
  useEffect(()=>{
    props.getArticles();
  },[])
  return (
    <Container>
      <Sharebox>
        <div>
          {props.user && props.user.photoURL ?
           <img src={props.user.photoURL} alt=""/>
           :
           <img src="/images/user.svg" alt=""/>
        }
        <button onClick={toggleShow} disabled={props.loading ? true : false}>
          start a post
        </button>
        </div>
        <div>
          <button>
            <img src="/images/photo-icon.svg" alt=""/>
            <span>Photo</span>
          </button>
          <button>
            <img src="/images/video-icon.svg" alt=""/>
            <span>Video</span>
          </button>
          <button>
            <img src="/images/event-icon.svg" alt=""/>
            <span>Event</span>
          </button>
          <button>
            <img src="/images/article-icon.svg" alt=""/>
            <span>Write an article</span>
          </button>
        </div>
      </Sharebox>
      { props.articles.length >= 1? (
          <Content>
{props.loading && <img src="/images/spin-loader.gif"/>}
{ props.articles.map((article, index)=>(
  <Article key={index}>
    <SharedActor>
      <a>
        <img src={article.actor.image}/>
        <div>
          <span>{article.actor.title}</span>
          {/* <span>{article.actor.description}</span> */}
          <span>
            {article.actor.date.toDate().toLocaleDateString()}
          </span>
        </div>
      </a>
      <button>
        <img src="/image/ellipsis.svg" alt=""/>
      </button>
    </SharedActor>
    <Description>{article.description}</Description>
    <Sharedimg>
      <a>
        {!article.shareImg && article.video ? (<ReactPlayer width="100%" url={article.video}/>): (article.shareImg && <img src={article.shareImg}/>)}
      </a>
    </Sharedimg>
    <Socialcount>
      <li>
        <button>
          <img
          src=""
          alt=""
          />
          <img
          src=""
          alt=""
          />
          <span>75</span>
        </button>
      </li>
      <li>
        <a>{article.comments} comments</a>
      </li>
      <li>
        <a>1 share</a>
      </li>
    </Socialcount>
    <Socialactions>
      <button>
        <img src="/images/like-icon.svg" alt=""/>
        <span>Like</span>
      </button>
      <button>
        <img src="/images/comment-icon.svg" alt=""/>
        <span>Comment</span>
      </button>
      <button>
        <img src="/images/share-icon.svg" alt=""/>
        <span>Share</span>
      </button>
      <button>
        <img src="/images/send-icon.svg" alt=""/>
        <span>Send</span>
      </button>
    </Socialactions>
  </Article>
))}
        </Content>)
        :
        <NoArticles>There are no articles yet</NoArticles>
    }
      <Postmodal toggleShow={toggleShow} show={show}/>
    </Container>
  )
}
const Container = styled.div`
grid-area: main;
`
const CommonCard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
position: relative;
box-shadow: 0 0 0 1px rgb( 0 0 0 / 15%), 0 0 1px rgb(0 0 0 / 20%);
`
const Sharebox = styled(CommonCard)`
display: flex;
flex-direction: column;
 color: #958b7b;
 margin: 0 0 8px;
 background: white;
 div:first-of-type{
 display: flex;
    margin: 10px;
    gap: 10px;
  img{
        width: 50px;
    border-radius: 50%;
  }
  button{
    border: 1px solid rgb(238, 238, 238);
    flex: 1;
    border-radius: 35px;
    background: tranparent;
    // height: 70px;
    text-align: start;
    text-indent: 10px;
    color: #777;
    // span{
    //   display: none;
    //   @media(min-width: 992px){
    //     display: block
    //   }
    // }
  }
 }
 div:nth-of-type(2){
    overflow-x: auto;
      display: flex;
    justify-content: space-between;
    padding: 0 40px 10px;
    margin: 15px 0 0;
    button{      
    height: 40px;
    border-radius: 20px;
    padding: 5px 10px;
      border: none;
    background: transparent;
    display: flex;
    align-items: center;
    gap: 3px;
    &:hover{
          background-color: rgba(0, 0, 0, 0.08);
    }
        span{
      display: none;
      media(min-width:567px){
        display: block
      }
      @media(min-width: 768px){
      display: none;
      }
      @media(min-width: 992px){
        display: block;
      }
      @media(max-width: 768px){
        display: block;
      }
    }
    }
    @media (min-width: 992px){
      padding-right: auto;
    padding-left: auto;
    }
 }
`
const Content = styled.div`
text-align: center;
> img{
  width: 70px;
}
`
const NoArticles = styled.p`
display: flex;
justify-content: center;
align-items: center;
height: 56%;
padding: 20px;
background: white;
box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 0px 1px;
text-transform: capitalize;
font-weight: bold;
color: rgb(102, 102, 102);
`
const Article= styled(CommonCard)`
padding: 0;
margin: 0 0 8px;
overflow: visible
`
 const SharedActor = styled.div`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: 12px 16px 0;
 margin-bottom: 8px;
 a{
  margin-right: 12px;
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  text-decoration: none;
  img{
width: 48px;
    border-radius: 50%;
  }
  > div{
display: flex;
    flex-grow: 1;
    flex-basis: 0px;
    margin-left: 8px;
    overflow: hidden;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
    span{
      text-align: left;
      &:first-child{
        font-size: 14px;
        font-weight: 700;
        color: rgb(0,0,0);
      }
      &:nth-child(2),
      &:nth-child(3){
        font-size: 12px;
        color: rgba(0,0,0, 0.6)
      }
    }
  }
 }

 button{
  position: absolute;
  right: 12px;
  top: 0;
  background: transparent;
  border: none;
  outline: none
 }
 `
 const Description = styled.div`
 padding: 0 16px;
 overflow: hidden;
 color: rgba(0,0,0, 0.9);
 font-size: 14px;
 text-align: left
 `
 const Sharedimg = styled.div`
 margin-top: 8px;
 width: 100%;
 display: block;
 position: relative;
 background-color: #f9fafb;
 img{
  object-fit: contain;
  width: 100%;
  height: 100%
 }
 `
 const Socialcount = styled.ul`
 line-height: 1.3;
 display: flex;
 align-items: center;
 overflow: auto;
 margin: 0 16px;
 padding: 8px 0;
 border-bottom: 1px solid #e9e5df;
 list-style: none;
 li{
  margin-right: 5px;
  font-size: 12px;
  button{
    display: flex;
    align-items: center;
    border: none;
    background-color: white
  }
 }
 `
 const Socialactions = styled.div`
 display: flex;
 align-items: center;
 justify-content: flex-start;
 max-width: 100%;
 margin: 0;
 min-height: 40px;
 padding: 4px 8px;
 button{
  display: inline-flex;
  align-items: center;
  padding: 8px;
  color: rgba(0,0,0, 0.6);
  border: none;
  background-color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: backgroud 0.3s;
  width: calc(100% / 4);
  height: 40px;
  justify-content: center;

  &:hover{
  background: rgba(0,0,0, 0.08);
}
@media(min-width: 768px){
  span{
    margin-left: 8px;
    margin-top: 3px;
    font-weight: 600;
  }
}
}
 `
//  const  Description = styled.div``
const mapStateToProps = (state)=>{
  return{
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    getArticles: ()=> dispatch(getArticlesAPI())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main)