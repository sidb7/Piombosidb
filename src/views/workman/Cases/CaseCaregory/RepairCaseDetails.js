import React, { useContext, useEffect, useState } from "react";
import "../../Cases/CreateCase/steps/CSS/CaseDetails.css"
import {
  ArrowLeft,
  ChevronDown,
  Edit3,
  Info,
  Moon,
  Star,
  Sun,
  Sunset,
  Tag,
  Tool,
  User,
} from "react-feather";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardTitle,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Progress,
} from "reactstrap";
import { ThemeColors } from "@src/utility/context/ThemeColors";
import { AiFillStar, AiOutlineBuild } from "react-icons/ai";
import GoogleMapReact from "google-map-react";
import { HiOutlineChartBar } from "react-icons/hi2";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import UserTimeline from "../../../ui-elements/cards/advance/CardUserTimeline";
import GoalOverview from "@src/views/ui-elements/cards/analytics/GoalOverview";
import CardChat from "../../../apps/CardChat";
import Earnings from "../../../ui-elements/cards/analytics/Earnings";

import CardTransactions from "../../../ui-elements/cards/advance/CardTransactions";
import OrdersBarChart from "../../../ui-elements/cards/statistics/OrdersBarChart";
import ProfitLineChart from "../../../ui-elements/cards/statistics/ProfitLineChart";

import ProgressDetails from "../CaseDetailsData/InstallationProgressDetails";
import SingleProductDetails from "../CreateCase/steps/SingleProductDetails";
import { PiHammer } from "react-icons/pi";
import { FiTool } from "react-icons/fi";
import RepairProgressDetails from "../CaseDetailsData/RepairProgressDetails";

const ProgressStages = 
{
  Repair:[
    {
      Status:"Inprogress",
      Title:"Site Visit",
      Phase:"Stage 1",
     },
  ]
,

PartsToBeReplaced:[
{
  Status:"Inprogress",
  Title:"Site Demo",
  Phase:"Stage 1",
 },
]
,

  SomeoneToInspect:[
    {
      Status:"Inprogress",
      Title:"Site Visit",
      Phase:"Stage 1",
     },
     
  ],

 
}
 


const items = [
  {
    src: "https://picsum.photos/id/123/1800/390",
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: "https://picsum.photos/id/456/1800/390",
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: "https://picsum.photos/id/678/1800/390",
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
];
export default function RepairCaseDetails({args,id}) {
  // const { id } = useParams();
  const [data, setData] = useState([]);
  const [arr, setArr] = useState([]);
  const { colors } = useContext(ThemeColors);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [StageDetails, setStageDetails] = useState(false);
  const [StagePhase, setStagePhase] = useState(false);
  const [StagePhaseColor, setPhaseColor] = useState("");
  
  const navigate = useNavigate();
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const [AddProducts,setAddProducts] =useState([
    {Name:"Product 1",Brand:"Brand 1",Number:1},
    {Name:"Product 1",Brand:"Brand 1",Number:2},
    {Name:"Product 1",Brand:"Brand 1",Number:3},
    {Name:"Product 1",Brand:"Brand 1",Number:4},
    {Name:"Product 1",Brand:"Brand 1",Number:5},
    {Name:"Product 1",Brand:"Brand 1",Number:6},
    {Name:"Product 1",Brand:"Brand 1",Number:7}])
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("CustomerClosedCase")));
    setArr(data.filter((e) => e.id === id));
  });

  const [modal, setModal] = useState(false);
  const toggle1 = () => setModal(!modal);

  const handleRemove = () => {
    setModal(!modal);
    // console.log(e.Summary)

    // const Status = data1.map(m =>
    //   {
    //     if(m.id===e.id)
    //     {
    //     return{
    //       ...m,
    //       Status:"Closed"
    //     } }
    //     else{
    //       return m
    //     }
    //   })

    //   setData1(Status)

    //   localStorage.setItem("WorkmanCaseSet",JSON.stringify(Status));

    const remove = data.filter((t) => t.id !== id);

    localStorage.setItem("CustomerCaseSet", JSON.stringify(remove));
    navigate("/enterprise/manageCases");
  };

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 20,
    controlSize: 5,
  };

  const [modal1, setModal1] = useState(false);

  const toggle = () => setModal1(!modal1);
  const star = 3;
  return (
    <>
     { StageDetails!=true? <div>
      <div>
        {" "}
        <Button
          color=""
          className="p-0 border-0"
          tag={Link}
          to={"/workman-Individual/manageCases"}
        >
          <ArrowLeft size={27} style={{ cursor: "pointer" }} />{" "}
        </Button>{" "}
      </div>
      {arr.map((e) => {
        return (
          <div className="container-lg">
            <div className="text-center d-flex justify-content-center align-items-end position-relative ">
              <h2>
                {" "}
                {(e.Title + "").charAt(0).toUpperCase() +
                  (e.Title + "").substring(1)}{" "}
              </h2>
              <div className=" position-absolute start-0  d-flex ps-1 ">
                {" "}
                <Button
                  color=""
                  className="text-success border-0"
                  style={{ cursor: "default" }}
                >
                OTP - 1432
                </Button>{" "}
              </div>
              <div className=" position-absolute end-0  d-flex ps-1 ">
                {" "}
                <Button color="primary" className=" border-0">
                  <Edit3 size={18} />
                  &nbsp;Edit
                </Button>{" "}
              </div>
              {/* <div className=' position-absolute end-0  d-flex ps-1 '> <Button color='' onClick={toggle1}  className='text-danger border-0'>Delete</Button> </div> */}
            </div>
            <hr />

            <div className="row match-height">
              <div className=" col-md-8 col-12">
                <Card className="w-100 position-relative">
                  <CardBody>
                    <CardTitle className="d-flex">
                      <Info size={23} />
                      &nbsp;&nbsp;&nbsp;<h4>Case Details</h4>{" "}
                    </CardTitle>
                    <div className="d-flex  align-items-center">
                      <div>
                        <div className=" row">
                          <div className=" col-lg-6">
                            {" "}
                            <b> Case created on : </b> {e.date}{" "}
                          </div>
                          <div className="col-lg-6">
                            {" "}
                            <b> Case Id : </b> {e.id}{" "}
                          </div>
                        </div>
                        <div className="row mt-1">
                          <div className=" d-flex col-lg-6">
                            <h6>Service Type : </h6> &nbsp; {e.ServiceType}&nbsp; 
                            {(e.ServiceType==="Installation")?<PiHammer size={16} color="#63B9CD"/>:(e.ServiceType==="Repair")?<FiTool size={16} color="#f5a002"/>: <AiOutlineBuild size={16} color="#1dc249"/>}
                          </div>
                          <div className=" d-flex col-lg-6">
                            <h6>Subservice Type : </h6> &nbsp; {e.SubServiceType}
                          </div>
                        </div>
                        <div className="row mt-1">
                          <div className=" d-flex col-lg-6">
                            <h6>Service Category : </h6> &nbsp; Category 1
                          </div>
                          <div className=" d-flex col-lg-6">
                            <h6>Service Subcategory : </h6> &nbsp; Subcategory 2
                          </div>
                        </div>
                        <hr />
                        <div className="row mt-1">
                          <div className=" d-flex col-lg-6">
                            <h6>Service Application : </h6> &nbsp; Timber Door
                          </div>
                          <div className=" d-flex col-lg-6">
                            <h6>Time Slot Booked : </h6> &nbsp; 10 am - 2 pm
                            &nbsp; <Sun size={20} />
                          </div>
                        </div>
                        <hr />
                        <div className="row mt-1">
                          <h6>Case Description :</h6>
                          <div className="text-justified">
                            {" "}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Illum quis delectus tempore numquam! Maxime
                            nemo vitae corrupti laudantium, inventore ullam
                            repellendus tenetur aspernatur, omnis a illo soluta
                            quae accusantium. Distinctio!{" "}
                          </div>
                        </div>
                        <div className="row mt-1 ">
                          <h6>Address :</h6>
                          <div className="text-justified">
                            {" "}
                            Lorems tenetur aspernatur, omnis a illo soluta quae
                            accusantium. Distinctio!{" "}
                          </div>
                        </div>
                      </div>
                      {/* <div className="d-flex gap-1 position-absolute end-0 bottom-0 mb-1 me-1">
                        <div>
                          <Button outline color="primary">
                            Accept
                          </Button>
                        </div>
                        <div>
                          <Button outline color="danger" onClick={toggle1}>
                            Decline
                          </Button>
                        </div>
                      </div> */}
                    </div>
                  </CardBody>
                </Card>
              </div>

              <div className="col-md-4 col-12  d-flex">
                <Card>
                  <CardBody>
                    <CardTitle className="d-flex position-relative ">
                      <User size={23} />
                      &nbsp;&nbsp;&nbsp;<h4>Customer Details</h4>
                      {/* <h6 className='position-absolute end-0  text-center'> <Badge color="success" >
                  Assigned
                    </Badge></h6> */}
                    </CardTitle>

                    <div className="row gap-1">
                      <div className="col-12">
                        <b>Workman status :</b>{" "}
                        <span className="text-success">Assigned</span>
                      </div>
                      <div className="col-12">
                        <b>Skill :</b> none
                      </div>
                      <div className="col-12 d-flex align-items-center">
                        <b>Level :</b>
                        &nbsp;{" "}
                        <AiFillStar
                          color={star >= 1 ? "#fcc80d" : "gray"}
                          size={19}
                        />
                        &nbsp;{" "}
                        <AiFillStar
                          color={star >= 2 ? "#fcc80d" : "gray"}
                          size={19}
                        />
                        &nbsp;{" "}
                        <AiFillStar
                          color={star >= 3 ? "#fcc80d" : "gray"}
                          size={19}
                        />
                        &nbsp;{" "}
                        <AiFillStar
                          color={star >= 4 ? "#fcc80d" : "gray"}
                          size={19}
                        />
                        &nbsp;{" "}
                        <AiFillStar
                          color={star >= 5 ? "#fcc80d" : "gray"}
                          size={19}
                        />
                      </div>
                    </div>

                    <hr />
                    <div className="row gap-1">
                      <div className="col-12">
                        <b>Workman Location :</b> Andheri
                      </div>
                      <div
                        className="col-12"
                        style={{ height: "200px", width: "100%" }}
                      >
                        <GoogleMapReact
                          bootstrapURLKeys={{ key: "" }}
                          defaultCenter={defaultProps.center}
                          defaultZoom={defaultProps.zoom}
                          zoomControl={false}
                        >
                          <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                          />
                        </GoogleMapReact>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>

           
           

            <div className="row match-height">
              <div className="col-lg-12">
                <Card>
                  <CardBody>
                    <CardTitle className="d-flex">
                      <HiOutlineChartBar size={23} />
                      &nbsp;&nbsp;&nbsp;
                      <h4>
                        Case Progress <b className="text-primary">25%</b>
                      </h4>{" "}
                    </CardTitle>

                    <div>
                      
                      <div className="d-flex flex-row   gap-lg-3  gap-md-2 gap-1    justify-content-center">
                         { (ProgressStages[arr[0].SubServiceType+""].map(e=>
                          {
                            return(
                              <div className="col-2">
                          <div
                          // to={`/enterprise/ProgressDetails/${id}`}
                          onClick={()=>{setStageDetails((e.Status!="Pending")? true:false),
                            setStagePhase(e.Phase),
                            window.scrollBy(0,-1000),
                            setPhaseColor(e.Status!="Pending"?(e.Status!="Completed")?"orange": "#63B9CD":"gray")
                          }}
                          id= {(e.Status!="Pending")? "ProgressStages":""}
                            style={{
                              border:e.Status!="Pending"?(e.Status!="Completed")?"3px solid orange": "3px solid #63B9CD":"3px solid gray",
                              height: "80px",
                              borderRadius: "5px",
                              cursor: e.Status!="Pending"?(e.Status!="Completed")?"pointer": "pointer":""
                              // backgroundColor:e.Status!="Pending"?(e.Status!="Completed")?"orange": "#63B9CD":"gray"
                            }}
                            className=" d-flex align-items-center justify-content-center"
                          >
                         <b className="fs-5">{e.Title}</b> 
                          </div>
                          <div className="w-100 d-flex justify-content-center">
                          
                            <ChevronDown color={e.Status!="Pending"?(e.Status!="Completed")?"orange":"#63B9CD":"" }/>
                          </div>
                          <div className="w-100 d-flex justify-content-center">
                            <div className="text-center " id= "ProgressStagesState">
                            <b    className= {e.Status!="Pending"?(e.Status!="Completed")?"text-warning":"text-primary":""}>{e.Status!="Pending"?e.Status:"Pending"}</b>
                              <p className="w-100 d-flex justify-content-center m-0">
                              {e.Status!="Pending"?"14/10/2023":"-------" }  
                              </p>
                            </div>
                          </div>
                          <div className="w-100 d-flex justify-content-center">
                            {" "}
                            <ChevronDown color={e.Status!="Pending"?(e.Status!="Completed")?"orange":"#63B9CD":"" } />
                          </div>
                        </div>
                            )
                          }
                          
                          ))   
                          }
                          </div>
                        
                      <Progress
                        className="my-0"
                        style={{
                          height: "4px",
                        }}
                        value={25}
                      />
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
{/* Products LIST */}
            <div className="row match-height">
             <div className="col-12">
              
             <Card style={{  overflowX: (window.innerWidth<"550")? "scroll":"visible",}}>
            {AddProducts.length != 0 && (
              <>
                {" "}
                <h3 className="my-1 d-flex justify-content-center position-sticky top-0">
                  <b>{AddProducts.length}&nbsp;Products Added</b>
                </h3>
                <div
                  className="row mb-1   px-1"
                  id="AddProductList"
                  style={{
                    height: "auto",
                    width: (windowWidth<"550")? "500px":"" ,
                   
                    maxHeight: "250px",
                    overflowY: "auto",
                   
                  }}
                >
                  <hr className="mb-0" />
                  <div
                    className="col-1 bg-primary text-light py-1 d-flex justify-content-center align-items-center position-sticky top-0"
                    style={{
                      borderRight: "1px solid gray",
                      borderRadius: "6px 0px 0px 0px",
                    }}
                  >
                    <b>ID</b>
                  </div>

                  <div className="col-3 bg-primary text-light py-1 d-flex justify-content-center align-items-center position-sticky top-0">
                    <b>Product Name</b>
                  </div>
                  <div
                    className="col-4 bg-primary text-light py-1 d-flex justify-content-center align-items-center position-sticky top-0"
                    style={{
                      borderRight: "1px solid gray",
                      borderLeft: "1px solid gray",
                    }}
                  >
                    <b>Brand</b>
                  </div>
                  <div
                    className="col-4 bg-primary text-light py-1 d-flex justify-content-center align-items-center position-sticky top-0"
                    style={{ borderRadius: "0px 6px 0px 0px", zIndex: 1 }}
                  >
                    <b>Details</b>
                  </div>
                  <hr className="mb-0" />
                  {AddProducts.map((e) => {
                    return (
                      <>
                        <hr className="mb-0 mt-0" />
                        <div
                          className="col-1 text-center py-0 d-flex justify-content-center align-items-center "
                          style={{ borderRight: "1px solid gray" }}
                        >
                          {e.Number}
                        </div>

                        <div
                          className="col-3 text-center py-0 d-flex justify-content-center align-items-center "
                          style={{
                            borderLeft: "1px solid gray",
                            borderRight: "1px solid gray",
                          }}
                        >
                          {e.Name}
                        </div>
                        <div
                          className="col-4 text-center py-0 d-flex justify-content-center align-items-center "
                          style={{
                            borderLeft: "1px solid gray",
                            borderRight: "1px solid gray",
                          }}
                        >
                          {e.Brand}
                        </div>
                        <div
                          className="col-4 text-center py-0 d-flex justify-content-center align-items-center position-relative "
                          style={{ borderLeft: "1px solid gray" }}
                        >
                          <Button
                            color=""
                           onClick={() => {setModal1(!modal1)}}
                
                          
                            className="text-primary border-0"
                          >
                            {" "}
                            View Details
                          </Button>
                         
                        </div>
                        <hr />
                      </>
                    );
                  })}
                </div>{" "}
              </>
            )}
          </Card>

             </div>
            </div>

            <div className="row match-height">
              <div className="col-lg-6">
                <CardChat />
              </div>
              <div className="col-lg-6">
                <UserTimeline />
              </div>
            </div>

            

            <div className="row match-height">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-6">
                    <OrdersBarChart warning={colors.warning.main} />
                  </div>
                  <div className="col-6">
                    <ProfitLineChart info={colors.info.main} />
                  </div>
                </div>
                <div className="row ">
                  <div className="col-12">
                    <Earnings success={colors.success.main} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
              <CardTransactions />
              </div>
            </div>

         

            <Modal isOpen={modal} toggle={toggle1} {...args}>
              <ModalHeader toggle={toggle1}>Confirm</ModalHeader>

              <ModalBody>Do you want to decline this case ?</ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={(m) => handleRemove()}>
                  Yes
                </Button>{" "}
                <Button color="secondary" onClick={toggle1}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        );
      })}</div> 
      :
      
      <RepairProgressDetails
      
      id={id} StagePhaseColor={StagePhaseColor} 
      setStagePhase={setStagePhase} 
      StagePhase= {StagePhase} 
      setStageDetails={setStageDetails}
      setPhaseColor={setPhaseColor}
      SubServiceType=  {arr[0].SubServiceType}
      /> 
      
      
     }

        
      
      
      
<div>
    
    <Modal isOpen={modal1} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}></ModalHeader>
      <ModalBody>
      <SingleProductDetails BackOFF={true}/>
      </ModalBody>
     
    </Modal>
  </div> 
    </>
  );
}
{/* <SingleProductDetails setSingleProduct={setSingleProduct}/>  */}