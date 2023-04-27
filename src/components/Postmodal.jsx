import React, { useState } from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import {connect} from "react-redux";
import { Timestamp } from "firebase/firestore";
import { postArticleAPI } from "../redux/actions";
function Postmodal(props) {
  const [editorText, setEditorText] = useState("");
  const [assetArea,setAssetArea] = useState("");
  const [shareImage,setShareImage] = useState("");
  const [videoLink,setVideoLink] = useState("");
 const handleChange = (e)=>{
  const image = e.target.files[0];
  if(image === "" || image === undefined){
    alert(`not an image, the file is a ${typeof image}`)
    return;
  }
  else{
    setShareImage(image)
  }
 }
  const switchAssetArea = (area)=>{
  setShareImage("");
  setVideoLink("")
  setAssetArea(area)
 }
  const reset = ()=>{
    setEditorText("");
    setShareImage("");
    setVideoLink("");
    setAssetArea("");
    props.toggleShow();
  }
  const handlePostArticles = (e)=>{
if(e.target !== e.currentTarget) return;
const payload = {
  image: shareImage,
  video: videoLink,
  user: props.user,
  description: editorText,
  timestamp: Timestamp.now()
}
props.postArticles(payload); 
reset()
  }
  return <>
{props.show &&   <Container>
    <Content className="content">
      <Header>
        <h2>create a post</h2>
      <button onClick={reset}>

        <img src="/images/close-icon.svg" alt=""/>
      </button>
      </Header>
      <Sharecontent>
        <Userinfo>
          {props.user && props.user.photoURL ?
        <img src={props.user.photoURL}/>
        :
        <img src="/images/user.svg" alt=""/>  
        }
        <span>{props.user && props.user.displayName}</span>
        </Userinfo>
        <Editor>
          <textarea
          value={editorText}
          onChange={(e)=>setEditorText(e.target.value)}
          placeholder="What do you want to talk about?"
          autoFocus={true}
          />
          {assetArea === "image" ?
         ( <Uploadimage>
            <input type="file" name="image" id="file" onChange={handleChange}/>
            <p>
              <label style={{
                cursor: "pointer",
                display: "block",
                marginBottom: "15px",
              }} htmlFor="file">
                Select an image to share
              </label>
            </p>

            
            {shareImage && <img src={URL.createObjectURL(shareImage)} alt=""/>}
          </Uploadimage>)
          :
          assetArea === "media" && (
            <>
            <input 
            style={{width: "100%", height: "30px", resize: false}}
            type="text"
            value={videoLink}
            onChange={(e)=> setVideoLink(e.target.value)}
            placeholder="please input a video link"
            />
            {videoLink && (
              <ReactPlayer width="100%" url={videoLink}/>
            )}
            </>
          )
        }
        </Editor>
      </Sharecontent>
      <Sharecreation>
        <Attachassets>
          <Assetbutton onClick={()=> switchAssetArea("image")}>
            <img src="/images/share-image.svg" alt=""/>
          </Assetbutton>
          <Assetbutton onClick={()=> switchAssetArea("media")}>
            <img src="/images/share-video.svg" alt=""/>
          </Assetbutton>
        </Attachassets>
        <Sharecomment>
          <Assetbutton>
            <img src="/images/share-comment.svg" alt=""/>
            Anyone
          </Assetbutton>
        </Sharecomment>
        <Postbutton 
        disabled={!editorText ? true : false}
        onClick={(e)=>handlePostArticles(e)}
        >
          post
        </Postbutton>
      </Sharecreation>
    </Content>
  </Container>}
  </>
}
const Container = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 99;
color: black;
background-color: rgba(0,0,0, 0.8);
animation: fadeIn 0.3s;
`
const Content= styled.div`
width: 100%;
    left: 50%;
    max-width: 552px;
    background-color: white;
    position: fixed;
    top: 50%;
    transform: translate(-50%,-60%);
`
const Header = styled.div`
display: flex;
justify-content: space-between;
padding: 16px 20px;
border-bottom: 1px solid rgba(0,0,0, 0.15);
align-items: center;
h2{
  line-height: 1.5;
  font-weight: 400;
  font-size: 18px;
  color: rgba(0,0,0, 0.6);
}
button{
  height: 40px;
  width: 40px;
  min-width: auto;
  color: rgba(0,0,0, 0.15);
  background: none;
  border:none;
  border-radius: 50%;
  cursor: pointer;
  &:hover{
    background-color: rgba(0,0,0, 0.08)
  }
}
svg,img{
  pointer-event: none
}
`
const Sharecontent = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1'
overflow-y: auto;
vertical-align: baseline;
background: transparent;
padding: 8px 12px;
`
const Userinfo = styled.div`
display: flex;
align-items: center;
padding: 12px 24px;
svg, img{
  width: 48px;
  height: 48px;
  background-clip: content-box;
  border: 2px solid transparent;
  border-radius: 50%
}
span{
  font-weight: 600;
  line-height: 1.5;
  font-size: 16px;
  margin-left: 5px
}
`
const Sharecreation = styled.div`
display: flex;
justify-content: space-between;
padding: 12px 24px 16px 16px;
height: 30px
`
const Assetbutton = styled.button`
height: 40px;
border:none;
min-width: auto;
color: rgba(0,0,0, 0.6);
font-weight: 500;
font-size: 14px;
background: none;
border-radius: 50%;
cursor: pointer;
&:hover{
  background-color: rgba(0,0,0, 0.08)
}
`
const Attachassets = styled.div`
display: flex;
align-items: center;
padding-right: 8px;
${Assetbutton}{
  width: 40px
}
`
const Postbutton = styled.button`
min-width: 60px;
padding-left: 16px;
padding-right: 16px;
background: ${(props)=> (props.disabled ? "rgb(235,235,235)" : "#0a66c2")};
color: ${(props)=> (props.disabled ? "rgb(0,0,0, 0.25)" : "#fff")};
font-size: 16px;
border-radius: 30px;
&:hover{
  background; ${((props)=> props.disabled ? "" : "#004182")}
}
`
const Uploadimage = styled.div`
text-align: center;
img{
  width: 100%
}
`
const Sharecomment = styled.div``
const Editor = styled.div`
padding: 12px 24px;
textarea{
  width: 100%;
  min-height: 100px;
  resize: none;
  font-size: 16px;
  font-weight: 400;
  outline: none;
  border: none;
  line-height: 1.5
}
`
const mapStateToProps = (state)=>{
  return{
user: state.userState.user,
articles: state.articleState.articles
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    postArticles: (payload) => dispatch(postArticleAPI(payload))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Postmodal)