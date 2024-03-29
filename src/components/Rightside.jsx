import React from 'react'
import styled from 'styled-components'
function RightSide() {
  return (
   <Container>
   <div>
     <FollowedCard>
        <Title>
            <h2>Add your feed</h2>
            <img src="/images/feed-icpn.svg" alt=""/>
        </Title>
        <FeedList>
            <li>
                <a>
                    <Avatar/>
                </a>
                <div>
                    <span>Ahmed Mamdooh</span>
                    <button>Follow</button>
                </div>
            </li>
        </FeedList>
        <Recommendation>
            View all recommendations
            <img src="/images/right-icon.svg"/>
        </Recommendation>
    </FollowedCard>
    <BannerCard>
        <img src="/images/banner-image.jpg" alt=""/>
    </BannerCard>
   </div>
   </Container>
  )
}
const Container = styled.div`
grid-area: rightside;
> div{
    position: fixed
}
`
const FollowedCard = styled.div`
text-align: center
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
position: relative;
border: none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
padding: 12px;
`
const Title = styled.div`
display: inline-flex;
align-items: center;
justify-content: space-between;
font-size: 16px;
width: 100%;
color: rgba(0 0 0 / 0.6)
`
const FeedList = styled.div`
margin-top: 16px;
li{
    display: flex;
    align-items: center;
    margin: 12px 0;
    position: relative;
    font-size: 14px;
    > div{
        display: flex;
        flex-direction: column;
    gap: 5px;
    }

    button{
     padding: 16px;
     cursor: pointer;
    border: 1px solid #aaa;
    align-items: center;
    border-radius: 15px;
    box-sizing: border-box;
    font-weight: 600;
    display: inline-flex;
    justify-content: center;
    max-height: 32px;
    width: 100%;
    text-align: center;
    &:hover{
      background-color: rgba(0, 0, 0, 0.08);
    }
    }
}
`
const Avatar = styled.div`
background-color: red;
background-size: contain;
background-repeat: np-repeat;
width: 48px;
height: 48px;
margin-right: 8px;
border-radius: 50%;
`
const Recommendation = styled.a`
color: #0a662c2;
display: flex;
align-items: center;
font-size: 14px;
`
const BannerCard = styled.div`
img{
    width: 100%;
    height: 100%
}
`
export default RightSide