import styled from "styled-components";

function r(px){
    let baseSize=75/2;
    return (px/baseSize).toFixed(2)+"rem";
}
export const TopBarSd=styled.div`
height:${r(44)};
border:1px solid red;
`;


export const CarouselWrap=styled.div`
     touch-action: none;
    .slider{
       .slider-list{
          .slider-slide{
              img{
                  height:180px;
              }
            /* border:10px solid red; */
            /* height:100%; */
          }
       }
    } 
`;