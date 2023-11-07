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

import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Cases/CreateCase/steps/CSS/CaseDetails.css";
import "./DotsStyle.css"
// REACT DRAW

import { ReactSketchCanvas } from "react-sketch-canvas";

import { selectThemeColors } from "@utils";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Plus,
  Trash2,
  X,
} from "react-feather";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Progress,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  FormGroup,
  FormText,
  Col,
  Form,
} from "reactstrap";
import { HiOutlineChartBar } from "react-icons/hi2";
import PropTypes from "prop-types";
import Select from "react-select";
import { PiEraserDuotone } from "react-icons/pi";
import { LuEraser } from "react-icons/lu";
import { BiPencil } from "react-icons/bi";
import toast from "react-hot-toast";
import "@styles/react/libs/flatpickr/flatpickr.scss";
import Flatpickr from "react-flatpickr";
import FeedbackForm from "./FeedbackForm";




export default function ProgressDetails(props) {

  const [items,setItems] =  useState(
 
      {
        Start: [
         
        
        ],
     
    
 
        End: [
        ]
      }

  )
  const [SiteReady, setSiteReady] = useState(false);
  const [Reschedule, setReschedule] = useState(true);
  
  const { className } = props;
  const [DrawColor, setDrawColor] = useState("#42f59e");
  const [modal, setModal] = useState(false);
  const [Image, setImage] = useState("");
  const [StartOTP, setStartOTP] = useState("");
  const [ClosureBox, setClosureBox] = useState(false);
  const [PaymentEnable, setPaymentEnable] = useState(false);
  const toggle = () => setModal(!modal);

  const [ProgressStages,setProgressStages] = useState(

    {
      Installation: [
        {
          Status: "Inprogress",
          Title: "Site Visit",
          Phase: "Stage 1",
        },
      ],
      ProductToDemo: [
        {
          Status: "Inprogress",
          Title: "Site Demo",
          Phase: "Stage 1",
        },
      ],
      SomeoneToVisit:[
        {
          Status:"Inprogress",
          Title:"Site Visit",
          Phase:"Stage 1",
         },
         
      ],  
    
      NewBuild: [
        {
          Status: "Pending",
          Title: "Stage 5",
          Phase: "Stage 5",
        },
      ],
    }
  )

const pushhhStart=(e)=>
{
  items["Start"].push(
    {
      src: e+"",
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
      Phase: "Stage 1",
    
    },
  )
  
}
const pushhhEnd=(e)=>
{
  items["End"].push(
    {
      src: e+"",
      altText: "Slide 1",
      caption: "Slide 1",
      key: 1,
      Phase: "Stage 1",
    
    },
  )
  
}

  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );

  const canvas = useRef(null);

  const exportImage = () => {
    canvas.current
      .exportImage("png")
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const ClearAll = () => {
    canvas.current.clearCanvas();
  };
  const EraseMode = () => {
    canvas.current.eraseMode(true);
  };
  const PenMode = () => {
    canvas.current.eraseMode(false);
  };

  const [feedback, setFeedback] = useState(false);

  const [open1, setOpen] = useState("1");
  const toggle1 = (id) => {
    if (open1 === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const [open2, setOpen2] = useState(false);
  const [focusAfterClose, setFocusAfterClose] = useState(true);

  const toggle2 = () => setOpen2(!open2);

  const OTPStartSuccessfull = () => {
    toast.success("OTP Verified successfully");
    toggle2();
    setClosureBox(true);
    setPaymentEnable(true);
  };
  const OTPCloseSuccessfull = () => {
    toast.success("OTP Verified successfully");
    toggle2();
    setFeedback(true);
  };

 const HandleRemoveStartImage=(e)=>
 {  const item = items["Start"].filter(t=>t.src!=e)
   setItems({Start:item,End:items["End"]})
 }
 const HandleRemoveEndImage=(e)=>
 {  const item = items["End"].filter(t=>t.src!=e)
   setItems({Start:items["Start"],End:item})
 }

  return (
    <>
      {
        <div>
          <h2 className="d-flex align-items-center">
            <Button
              color=""
              onClick={() => props.setStageDetails(false)}
              className="p-0 border-0"
            >
              <ArrowLeft size={28} />
            </Button>
            &nbsp;Case Progress Details <ChevronRight /> {props.StagePhase}
          </h2>
          <hr />

          <div className="row mx-2 match-height">
            <div className="col-lg-12">
              <div>
                <div className="d-flex flex-row  gap-lg-3 gap-md-2  gap-2  justify-content-center">
                  {ProgressStages[props.SubServiceType].map((e) => {
                    return (
                      <div className="col-2">
                        <div
                          // to={`/enterprise/ProgressDetails/${id}`}
                          // onClick={()=>{setStageDetails(true),setStagePhase(e.Phase)}}
                          id={
                            e.Status != "Pending" && props.StagePhase != e.Phase
                              ? "ProgressStages"
                              : ""
                          }
                          style={{
                            border:
                              e.Status != "Pending"
                                ? e.Status != "Completed"
                                  ? "3px solid orange"
                                  : "3px solid #63B9CD"
                                : "3px solid gray",
                            height: "60px",
                            borderRadius: "5px",
                            cursor:
                              e.Status != "Pending"
                                ? e.Status != "Completed"
                                  ? "pointer"
                                  : "pointer"
                                : "",
                            // backgroundColor:e.Status!="Pending"?(e.Status!="Completed")?"orange": "#63B9CD":"gray"
                          }}
                          className=" d-flex align-items-center justify-content-center"
                          onClick={() => {
                            e.Status != "Pending" &&
                              props.setStagePhase(e.Phase),
                              e.Status != "Pending" &&
                                props.setPhaseColor(
                                  e.Status != "Pending"
                                    ? e.Status != "Completed"
                                      ? "orange"
                                      : "#63B9CD"
                                    : "gray"
                                );
                          }}
                        >
                          <b className="fs-5">{e.Title}</b>
                        </div>

                        <div className="w-100 d-flex justify-content-center">
                          <div className="text-center" id="ProgressStagesState">
                            <b
                              className={
                                e.Status != "Pending"
                                  ? e.Status != "Completed"
                                    ? "text-warning"
                                    : "text-primary"
                                  : ""
                              }
                            >
                              {e.Status != "Pending" ? e.Status : "Pending"}
                            </b>
                            <p className="w-100 d-flex justify-content-center m-0">
                              {e.Status != "Pending" ? "14/10/2023" : "-------"}
                            </p>
                          </div>
                        </div>
                        {props.StagePhase === e.Phase && (
                          <div>
                            {" "}
                            <div className="w-100 d-flex justify-content-center">
                              {" "}
                              <ChevronDown
                                color={
                                  e.Status != "Pending"
                                    ? e.Status != "Completed"
                                      ? "orange"
                                      : "#63B9CD"
                                    : ""
                                }
                              />
                            </div>{" "}
                          </div>
                        )}
                      </div>
                    );
                  })}
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

          <div
            style={{
              borderTop:
                props.StagePhaseColor === "orange"
                  ? "1px solid orange"
                  : props.StagePhaseColor === "#63B9CD"
                  ? "1px solid #63B9CD"
                  : "gray",
            }}
            className="mb-1"
          ></div>
          {/* <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}
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
      </Slider> */}

      {props.SubServiceType==="Installation"&&

  <div>
          {props.StagePhase === "Stage 1" && (
            <div className="row mb-2">
              <Accordion flush open={open1} toggle={toggle1}>
                <AccordionItem>
                  <AccordionHeader targetId="1">
                    {" "}
                    <h4>Questionaire </h4>
                  </AccordionHeader>
                  <AccordionBody accordionId="1">
                    <div className="row">
                      <div className="col-6">
                        <div className="mb-1 ">
                          <h6>Is the site Ready ?</h6>
                          <Input
                            type="radio"
                            checked={SiteReady}
                            onClick={() => setSiteReady(true)}
                          ></Input>{" "}
                          <Label className="me-1"> Yes</Label>
                          <Input
                            type="radio"
                            checked={!SiteReady}
                            onClick={() => {setSiteReady(false),setClosureBox(false),setPaymentEnable(false)}}
                          ></Input>{" "}
                          <Label> No</Label>
                        </div>
                        <div className="mb-1 ">
                          <h6>
                            Do you want to opt for Product Demo ? (optional)
                          </h6>
                          <Input
                            type="radio"
                            checked={!SiteReady}
                            onClick={() => setSiteReady(false)}
                          ></Input>{" "}
                          <Label className="me-1"> Yes</Label>
                          <Input
                            type="radio"
                            checked={SiteReady}
                            onClick={() => setSiteReady(true)}
                          ></Input>{" "}
                          <Label> No</Label>
                        </div>
                      </div>

                      {SiteReady && (
                        <div className="col-6">
                          <CardBody>
                            <h6>Description :</h6>
                            <Input
                              type="textarea"
                              placeholder="Enter Description"
                            ></Input>
                          </CardBody>
                        </div>
                      )}
                    </div>
                  </AccordionBody>
                </AccordionItem>{" "}
              </Accordion>
            </div>
          )}

          {SiteReady ? (
            <div className="row">
              <div className="col-lg-12 col-12">
                <Card>
                  <h4 className="d-flex  mx-1 mt-1 position-relative">
                    Stage Start Pictures{" "}
                   <div  className="position-absolute end-0 "> 
                  <Input  id="Start-ImageSelect" type="file" onChange={e=>pushhhStart(URL.createObjectURL(e.target.files[0]))}/>
                   {" "}
              
                   {/* <Button  className="p-0 m-0" color="" onClick={()=>items["Start"].pop()}  ><Trash2  style={{width:"2.6rem",height:"2.2rem",cursor:"pointer"}} /></Button> */}
                   </div>
                  </h4>
                  <CardBody className="mt-1 pt-0">
                    <div className="row ">
                     
                      {Array.isArray(items["Start"]) &&
                        items["Start"].map((e) => {
                          return (
                            <>
                              {e.Phase === props.StagePhase && (
                                <div
                                  className="col-lg-3 col-6 position-relative "
                                  style={{ height: "200px", padding: "7px" }}
                                >
                                  <img
                                    className="m-0 p-0"
                                    src={e.src}
                                    height={"100%"}
                                    width={"100%"}
                                    alt=""
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      setModal(!modal), setImage(e.src);
                                    }}
                                  />
                             
                             
                       <Button   color="" style={{border:"1px solid gray"}} className="p-0 m-0 bg-light position-absolute top-0 end-0" onClick={()=>HandleRemoveStartImage(e.src)}><X size={18}/></Button>
                                </div>
                              )}
                              
                            </>
                          );
                        })}

                        {(Array.isArray(items["Start"])&&items["Start"].length<4)&& <div 
                         className=" col-lg-3 col-6 d-flex justify-content-center align-items-center " 
                         >
                          <div id="NewImageUpload" style={{width:"100%" ,height:"13.5rem"}} ><label 
                   style={{width:"100%",height:"100%",cursor:"pointer"}} 
                   className="text-center d-flex align-items-center justify-content-center text-light" 
                   for="Start-ImageSelect" ><Plus color="gray" size={45}/></label>
                         </div></div>}
                    </div>
                  </CardBody>
                </Card>
              </div>

             {ClosureBox&&  <div className="col-lg-12 col-12">
                <Card>
                  <h4 className="d-flex  mx-1 mt-1 position-relative">
                    Stage End Pictures{" "}
                   <div  className="position-absolute end-0 "> 
                  <Input  id="Start-ImageSelect1" type="file" onChange={e=>pushhhEnd(URL.createObjectURL(e.target.files[0]))}/>
                   {" "}
              
                   {/* <Button  className="p-0 m-0" color="" onClick={()=>items["Start"].pop()}  ><Trash2  style={{width:"2.6rem",height:"2.2rem",cursor:"pointer"}} /></Button> */}
                   </div>
                  </h4>
                  <CardBody className="mt-1 pt-0">
                    <div className="row ">
                     
                      {Array.isArray(items["End"]) &&
                        items["End"].map((e) => {
                          return (
                            <>
                              {e.Phase === props.StagePhase && (
                                <div
                                  className="col-lg-3 col-6 position-relative "
                                  style={{ height: "200px", padding: "7px" }}
                                >
                                  <img
                                    className="m-0 p-0"
                                    src={e.src}
                                    height={"100%"}
                                    width={"100%"}
                                    alt=""
                                    style={{ cursor: "pointer" }}
                                    onClick={() => {
                                      setModal(!modal), setImage(e.src);
                                    }}
                                  />
                             
                             
                       <Button   color="" style={{border:"1px solid gray"}} className="p-0 m-0 bg-light position-absolute top-0 end-0" onClick={()=>HandleRemoveEndImage(e.src)}><X size={18}/></Button>
                                </div>
                              )}
                              
                            </>
                          );
                        })}

                        {(Array.isArray(items["End"])&&items["End"].length<4) && <div 
                         className=" col-lg-3 col-6 d-flex justify-content-center align-items-center " 
                         >
                          <div id="NewImageUpload1" style={{width:"100%" ,height:"13.5rem"}} ><label 
                   style={{width:"100%",height:"100%",cursor:"pointer"}} 
                   className="text-center d-flex align-items-center justify-content-center text-light" 
                   for="Start-ImageSelect1" ><Plus color="gray" size={45}/></label>
                         </div></div>}
                    </div>
                  </CardBody>
                </Card>
              </div>}
            </div>
          ) : (
            <div className="row">
              <div className="col-lg-12">
                <Card>
                  <CardBody>
                    <h4 className="mb-2">Reschedule</h4>
                    <div className="row">
                      <div className="col-lg-6">
                        <h6>Select Date :</h6>
                        <Input
                          type="radio"
                          checked={Reschedule}
                          onClick={() => setReschedule(true)}
                        ></Input>{" "}
                        <Label>Now</Label>
                        <Input
                          className="ms-1"
                          type="radio"
                          checked={!Reschedule}
                          onClick={() => setReschedule(false)}
                        ></Input>{" "}
                        <Label>Later</Label>
                        <div className="d-flex mt-1">
                          {" "}
                          <Label>Do you wish to Self assign?</Label>
                          <div className="ms-1">
                            {" "}
                            <Input type="radio"></Input> <Label>Yes</Label>
                            <Input className="ms-1" type="radio"></Input>{" "}
                            <Label>No</Label>
                          </div>
                        </div>
                      </div>

                      {Reschedule ? (
                        <div className="col-lg-6">
                          <div>
                            <Label>Pick a date</Label>
                            <Flatpickr
                              id="date-time-picker"
                              value={"today"}
                              options={{
                                altInput: true,
                              }}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="col-lg-6">
                          <h5>Case will be sent to redressal</h5>
                        </div>
                      )}
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          )}

          <div>
            <div className="row">
              <div className="col-12">
                {PaymentEnable ? (
                  <Card>
                    <CardBody>
                      <h4 className="mb-1">Payment</h4>
                      <Input type="radio"></Input> <Label>PrePaid</Label>
                      <Input className="ms-1" type="radio"></Input>{" "}
                      <Label>PostPaid</Label>
                    </CardBody>
                  </Card>
                ) : (
                  <Card className="mb-1">
                    <CardBody>
                      <h4>Redressal:</h4>
                      <div className="row">
                        <div className="col-4">
                          <Label>Type : </Label>
                          <Select
                            theme={selectThemeColors}
                            className="react-select my-1"
                            classNamePrefix="select"
                            options={[
                              { value: "Option1", label: "Option1" },
                              { value: "Option1", label: "Option1" },
                              { value: "Option1", label: "Option1" },
                            ]}
                          />
                        </div>
                        <div className="col-8">
                          {" "}
                          <Label>Type : </Label>
                          <Input
                            type="textarea"
                            placeholder="Enter your greviances"
                          ></Input>
                        </div>
                      </div>

                      <Button className="my-1">Submit</Button>
                    </CardBody>
                  </Card>
                )}

              
              </div>
             
            </div>

          </div>

          <div className="row d-flex justify-content-center ">
            <div className="col-2  mb-1">
                  <Button
                    onClick={SiteReady && toggle2}
                    color={ClosureBox ? "danger" : SiteReady?  "success" :"warning"}
                    className="w-100"
                  >
                    {" "}
                    {ClosureBox ? "Close Case" : SiteReady?  "Save" :"Rechedule"}
                  </Button></div>
                {ClosureBox &&      
                  <div className="col-2">
                            <Button  className="w-100" color="warning">Reschedule Case</Button>
                  </div>} 
                </div>

 </div>}

{(props.SubServiceType==="ProductToDemo"||props.SubServiceType==="SomeoneToVisit") &&
<div><div className="row">
              <div className="col-12">
                {PaymentEnable ? (
                  <Card>
                    <CardBody>
                      <h4 className="mb-1">Payment</h4>
                      <Input type="radio"></Input> <Label>PrePaid</Label>
                      <Input className="ms-1" type="radio"></Input>{" "}
                      <Label>PostPaid</Label>
                    </CardBody>
                  </Card>
                ) : (
                  <Card className="mb-1">
                    <CardBody>
                      <h4>Redressal:</h4>
                      <div className="row">
                        <div className="col-4">
                          <Label>Type : </Label>
                          <Select
                            theme={selectThemeColors}
                            className="react-select my-1"
                            classNamePrefix="select"
                            options={[
                              { value: "Option1", label: "Option1" },
                              { value: "Option1", label: "Option1" },
                              { value: "Option1", label: "Option1" },
                            ]}
                          />
                        </div>
                        <div className="col-8">
                          {" "}
                          <Label>Type : </Label>
                          <Input
                            type="textarea"
                            placeholder="Enter your greviances"
                          ></Input>
                        </div>
                      </div>

                      <Button className="my-1">Submit</Button>
                      <div className="m-0">
   <div className=" d-flex justify-content-center align-items-center"> <h4 >Enter start OTP to begin site demo</h4></div>
   <div className=" d-flex justify-content-center align-items-center"><ArrowDown/></div>
  </div>
                    </CardBody>
                  </Card>
                )}

              
              </div>
             
            </div>

<div className="row ">
            <div className="col-4 mx-auto mt-0 mb-1">
                  <Button
                    onClick={toggle2}
                    color={ClosureBox ? "danger" : "success"}
                    className="w-100"
                  >
                    {" "}
                    {ClosureBox ? "Close Case" : "Enter Start OTP"}
                  </Button></div>
                </div>
</div>

}




          

{/* MODALS */}
          
          <div className="row">
              <Modal
                isOpen={modal}
                toggle={toggle}
                className={className}
                centered={true}
                size="lg"
              >
                <ModalBody className="m-0 p-0">
                  <div className=" w-100 row gap-0 px-1 m-1">
                    {/* <div className='col-3'>  <Button onClick={exportImage} >Get Image</Button></div>  */}
                    <div className=" col-2 m-0 p-0  ">
                      <div className="row gap-1">
                        <div
                          className="col-1"
                          onClick={() => {
                            setDrawColor("#f54242"), PenMode();
                          }}
                          style={{
                            cursor: "pointer",
                            scale: DrawColor != "#f54242" ? "0.9" : "1.2",
                            borderRadius: "30px",
                            height: "20px",
                            backgroundColor: "#f54242",
                          }}
                        ></div>
                        <div
                          className="col-1"
                          onClick={() => {
                            setDrawColor("#42bcf5"), PenMode();
                          }}
                          style={{
                            cursor: "pointer",
                            scale: DrawColor != "#42bcf5" ? "0.9" : "1.2",
                            borderRadius: "30px",
                            height: "20px",
                            backgroundColor: "#42bcf5",
                          }}
                        ></div>
                        <div
                          className="col-1"
                          onClick={() => {
                            setDrawColor("#42f59e"), PenMode();
                          }}
                          style={{
                            cursor: "pointer",
                            scale: DrawColor != "#42f59e" ? "0.9" : "1.2",
                            borderRadius: "30px",
                            height: "20px",
                            backgroundColor: "#42f59e",
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="col-1">
                      <div className="row gap-3">
                        {/* <div className=' col-2 m-0 p-0  '>  <div  style={{cursor:"pointer"}} className='m-0 p-0 border-0 ' color=''  onClick={PenMode}><BiPencil size={20}/></div></div> */}
                        <div className=" col-1 m-0 p-0  ">
                          {" "}
                          <div
                            style={{ cursor: "pointer" }}
                            className="m-0 p-0 border-0"
                            color=""
                            onClick={EraseMode}
                          >
                            <LuEraser size={20} />
                          </div>
                        </div>
                        <div
                          className=" col-1 m-0 p-0 d-flex align-items-center text-center "
                          onClick={ClearAll}
                          style={{ cursor: "pointer" }}
                        >
                          {" "}
                          Clear
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ cursor: "crosshair" }}>
                    <ReactSketchCanvas
                      height="500px"
                      exportWithBackgroundImage={true}
                      backgroundImage={Image}
                      preserveBackgroundImageAspectRatio
                      eraserWidth={20}
                      ref={canvas}
                      strokeWidth={5}
                      strokeColor={DrawColor}
                    />
                  </div>
                  {/* <img style={{cursor:"crosshair"}} width={"100%"} height={"100%"}  src={Image} alt="" /> */}
                  <ModalFooter>
                    <Input type="textarea" placeholder="Remarks"></Input>
                    <Button>Save</Button>
                  </ModalFooter>
                </ModalBody>
              </Modal>

              <Modal
                returnFocusAfterClose={focusAfterClose}
                isOpen={open2}
                centered
              >
                {!ClosureBox ? (
                  <>
                    <ModalBody>
                      <h3 className="w-100 d-flex justify-content-center mb-2">
                        <b>OTP Verification</b>
                      </h3>
                      <Input
                        type="number"
                        placeholder="Enter OTP"
                        onChange={(e) => setStartOTP(e.target.value)}
                      ></Input>
                      <h6></h6>
                    </ModalBody>
                    <ModalFooter>
                      <Button outline color="danger" onClick={toggle2}>
                        Cancel
                      </Button>
                      <Button
                        color="primary"
                        onClick={() =>
                          StartOTP === "1234"
                            ? OTPStartSuccessfull()
                            : toast.error("Incorrect OTP")
                        }
                      >
                        Submit
                      </Button>
                    </ModalFooter>{" "}
                  </>
                ) : (
                  <>
                    <ModalBody>
                      <h3 className="w-100 d-flex justify-content-center mb-2">
                        <b>Closing OTP Verification</b>
                      </h3>
                      <Input
                        type="number"
                        placeholder="Enter Closing OTP"
                        onChange={(e) => setStartOTP(e.target.value)}
                      ></Input>
                      <h6></h6>
                    </ModalBody>
                    <ModalFooter>
                      <Button outline color="danger" onClick={toggle2}>
                        Cancel
                      </Button>
                      <Button
                        color="primary"
                        onClick={() =>
                          StartOTP === "4321"
                            ? OTPCloseSuccessfull()
                            : toast.error("Incorrect OTP")
                        }
                      >
                        Submit
                      </Button>
                    </ModalFooter>{" "}
                  </>
                )}
              </Modal>

              {feedback && (
                <Modal
                  returnFocusAfterClose={focusAfterClose}
                  isOpen={true}
                  centered
                  size="lg"
                >
                  {
                    <>
                      <ModalHeader>
                        <h2>Feedback</h2>
                      </ModalHeader>
                      <ModalBody>
                        <FeedbackForm />
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          outline
                          color="danger"
                          onClick={() => setFeedback(false)}
                        >
                          Cancel
                        </Button>
                        <Button color="primary">Submit</Button>
                      </ModalFooter>
                    </>
                  }
                </Modal>
              )}
            </div>
        </div>
      }
    </>
  );
}
