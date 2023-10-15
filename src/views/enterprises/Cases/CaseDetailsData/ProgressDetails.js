// import React, { Component } from "react";
// import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
// import "./DotsStyle.css"
// import { ArrowLeft, ArrowRight } from "react-feather";
// import { Link, useParams } from "react-router-dom";
// import { Button, Card, CardTitle } from "reactstrap";

// function withParams(Component) {
//     return props => <Component {...props} params={useParams()} />;
//   }
// class AsNavFor extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       nav1: null,
//       nav2: null,
//       activeSlide: 0,
//       id:""
//     };
 
//   }

 
//   componentDidMount() {
//     let {id }= this.props.params;
//     this.setState({
//       nav1: this.slider1,
//       nav2: this.slider2,
//       activeSlide: 0,
//       id:id
//     });

      
       
//   }
 
//   render() {
   
//     const items = [
//         {
//           src: 'https://picsum.photos/id/123/800/450',
//           altText: 'Slide 1',
//           caption: 'Slide 1',
//           key: 1,
//         },
//         {
//           src: 'https://picsum.photos/id/456/800/450',
//           altText: 'Slide 2',
//           caption: 'Slide 2',
//           key: 2,
//         },
//         {
//           src: 'https://picsum.photos/id/678/800/450',
//           altText: 'Slide 3',
//           caption: 'Slide 3',
//           key: 3,
//         },
//         {
//             src: 'https://picsum.photos/id/648/800/450',
//             altText: 'Slide 3',
//             caption: 'Slide 3',
//             key: 3,
//           },
//           {
//             src: 'https://picsum.photos/id/618/800/450',
//             altText: 'Slide 3',
//             caption: 'Slide 3',
//             key: 3,
//           },
//           {
//             src: 'https://picsum.photos/id/128/800/450',
//             altText: 'Slide 3',
//             caption: 'Slide 3',
//             key: 3,
//           },
//           {
//             src: 'https://picsum.photos/id/645/800/450',
//             altText: 'Slide 3',
//             caption: 'Slide 3',
//             key: 3,
//           },
         
//       ];

//     return (
//         <>
//       <h2 className="d-flex align-items-center"> <Button color=""  tag={Link} to={`/enterprise/CasesDetails/${this.state.id}`} className="p-0 border-0"><ArrowLeft size={28} /></Button>&nbsp; Progress Details</h2>

      
//       <div className="container-lg mt-1">
        
//         {/* <h4>First Slider {this.state.activeSlide}</h4> */}
//         <Slider
//         infinite={false}
//           asNavFor={this.state.nav2}
//           ref={slider => (this.slider1 = slider)}
//     arrows={false}
//     afterChange={current => this.setState({ activeSlide: current })} 
//     dots={true}

  
	
//         >
//             {items.slice(0).reverse().map((e)=>
//             {
//                 return (
                 
//                     <div  >
//          <img className="m-auto"  src={e.src} alt="" />
//           <div className="m-1 p-1 rounded-2" style={{textAlign:"justify",border:"1px solid gray"}}> <h5><b>Description :</b> </h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit in officia culpa quod placeat debitis corporis rem suscipit eveniet earum necessitatibus, voluptas beatae laborum dolores. Cupiditate impedit voluptatum sit error.</div>
//           </div>
//                 )
//             })}
          
          
//         </Slider>
//       <div className="d-flex position-relative my-2 mx-1"> 
//       <div  className="position-absolute start-0" onClick={ ()=> this.slider2.slickPrev()} style={{cursor:"pointer",color:(this.state.activeSlide!=0)?"white":"gray"}} ><ArrowLeft/> Newer</div>
//       <div className="position-absolute end-0"   onClick={ ()=>   this.slider2.slickNext()} style={{cursor:"pointer",color:(this.state.activeSlide<items.length-1)?"white":"gray"}}>Older <ArrowRight/></div>
//       </div> 

      
//         <Slider
//             infinite={false}
//             asNavFor={this.state.nav1}
//           ref={slider => (this.slider2 = slider)}
//           arrows={false}
//           slidesToShow={5}
//           swipeToSlide={true}
//           focusOnSelect={true}
         
        
//         >
//           {items.slice(0).reverse().map((e)=>
//             {
//                 return (
                
//                     <div style={{width:"20%",height:"30%"}} className="p-1 d-flex justify-content-center">
//           <h3><img  style={{cursor:"pointer"}}  width={"100%"} height={"100%"}  src={e.src} alt="" /></h3>
//           </div>

         
//                 )
//             }
            
        
            
//             )
            
          
            
//             }
         

//         </Slider>
//       </div> </>
//     );
//   }
// }
// export default withParams(AsNavFor);


import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowLeft, ArrowRight, ChevronDown, ChevronRight } from 'react-feather';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardTitle, Progress } from 'reactstrap';
import { HiOutlineChartBar } from 'react-icons/hi2';

const items = [
           {
             src: 'https://picsum.photos/id/123/800/450',
             altText: 'Slide 1',
             caption: 'Slide 1',
             key: 1,
           },
           {
             src: 'https://picsum.photos/id/456/800/450',
             altText: 'Slide 2',
             caption: 'Slide 2',
             key: 2,
           },
           {
             src: 'https://picsum.photos/id/678/800/450',
             altText: 'Slide 3',
             caption: 'Slide 3',
             key: 3,
           },
           {
               src: 'https://picsum.photos/id/648/800/450',
               altText: 'Slide 3',
               caption: 'Slide 3',
               key: 3,
             },
             
         ];

         const ProgressStages = [
          {
           Status:"Completed",
           Title:"Stage 1",
           Phase:"Stage 1"
          },
          {
           Status:"Inprogress",
           Title:"Stage 2",
           Phase:"Stage 2"
          },
          {
            Status:"Pending",
            Title:"Stage 3",
            Phase:"Stage 3"
           },
          {
            Status:"Pending",
            Title:"Stage 4",
            Phase:"Stage 4"
          },
          {
            Status:"Pending",
            Title:"Stage 5",
            Phase:"Stage 5"
           },
        ];
        
export default function ProgressDetails({id,setStageDetails,StagePhase,StagePhaseColor}) {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [ActiveSlides, setActiveSlides] = useState();
    return (
    <div>
       <h2 className="d-flex align-items-center"> 
       <Button color="" onClick={()=>setStageDetails(false)}   className="p-0 border-0"><ArrowLeft size={28} /></Button>
       &nbsp;{StagePhase}&nbsp;<ChevronRight/> Progress Details</h2>
       <hr />

       <div className="row mx-3 match-height">
              <div className="col-lg-12">
                
                    

                    <div>
                      
                      <div className="row  gap-lg-3    justify-content-center">
                        {(ProgressStages.map(e=>
                          {
                            return(
                              <div className="col-2">
                          <div
                          // to={`/enterprise/ProgressDetails/${id}`}
                          // onClick={()=>{setStageDetails(true),setStagePhase(e.Phase)}}
                          // id= {(e.Status!="Pending")? "ProgressStages":""}
                            style={{
                              border:e.Status!="Pending"?(e.Status!="Completed")?"3px solid orange": "3px solid #63B9CD":"3px solid gray",
                              height: "60px",
                              borderRadius: "5px",
                              // cursor: e.Status!="Pending"?(e.Status!="Completed")?"pointer": "pointer":""
                              // backgroundColor:e.Status!="Pending"?(e.Status!="Completed")?"orange": "#63B9CD":"gray"
                            }}
                            className=" d-flex align-items-center justify-content-center"
                          >
                         <b className="fs-5">{e.Title}</b> 
                          </div>
                         
                            <div className="w-100 d-flex justify-content-center">
                            <div className="text-center" id= "ProgressStagesState">
                            <b    className= {e.Status!="Pending"?(e.Status!="Completed")?"text-warning":"text-primary":""}>{e.Status!="Pending"?e.Status:"Pending"}</b>
                            { (StagePhase===e.Phase)&& <div>  <p className="w-100 d-flex justify-content-center m-0">
                                14/10/2023
                              </p></div>}
                            </div>
                          </div>
                        { (StagePhase===e.Phase)&& <div>   <div className="w-100 d-flex justify-content-center">
                            {" "}
                            <ChevronDown color={e.Status!="Pending"?(e.Status!="Completed")?"orange":"#63B9CD":"" }/>
                          </div> </div>}
                        </div>
                            )
                          }))}
                          </div>
                        
                      {/* <Progress
                        className="my-0"
                        style={{
                          height: "4px",
                        }}
                        value={25}
                      /> */}
                    </div>
                 
              </div>
            </div>

       <div style={{borderTop:(StagePhaseColor==="orange")?"1px solid orange":"1px solid #63B9CD"}} className='mb-1'></div>
      <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}
      arrows={false}
      infinite={false}
          dots={true}
          afterChange={current => setActiveSlides(current)} 
      >
      {items.slice(0).reverse().map((e)=>
            {
                return (
              
                    <div  >
         <img className="m-auto"  src={e.src} alt="" />
          <div className="m-1 p-1 rounded-2" style={{textAlign:"justify",border:"1px solid gray"}}> <h5><b>Description :</b> </h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit in officia culpa quod placeat debitis corporis rem suscipit eveniet earum necessitatibus, voluptas beatae laborum dolores. Cupiditate impedit voluptatum sit error.</div>
          </div>
                )
            })}
      </Slider>

      <div className="d-flex position-relative my-2 mx-1"> 
       <div  className="position-absolute start-0" onClick={ ()=> nav1.slickPrev()}
       style={{cursor:"pointer",color:(ActiveSlides!=0)?"white":"gray"}}
       ><ArrowLeft/> Newer</div>

       <div className="position-absolute end-0"   onClick={ ()=> nav2.slickNext()} 
       style={{cursor:"pointer",color:(ActiveSlides<items.length-1)?"white":"gray"}}
       >Older <ArrowRight/></div>
       </div>
    
      <Slider
      infinite={false}
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        arrows={false}
                  slidesToShow={5}
                  swipeToSlide={true}
                  focusOnSelect={true}
      >
       {items.slice(0).reverse().map((e)=>
             {
                 return (
              
                     <div style={{width:"20%",height:"30%"}} className="p-1 d-flex justify-content-center">
           <h3><img  style={{cursor:"pointer"}}  width={"100%"} height={"100%"}  src={e.src} alt="" /></h3>
           </div>
       
                 )} )}
      </Slider>
    </div>
  );
}