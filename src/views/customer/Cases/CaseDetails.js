import React, { useContext, useEffect, useState } from 'react'
import { ArrowLeft, Info, Moon, Star, Sun, Sunset, Tag, Tool, User } from 'react-feather'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Badge, Button, Card, CardBody, CardTitle, Modal, ModalBody, ModalFooter, ModalHeader, Progress } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import {AiFillStar} from 'react-icons/ai'
import GoogleMapReact from 'google-map-react';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

import UserTimeline from '../../ui-elements/cards/advance/CardUserTimeline';
import GoalOverview from '@src/views/ui-elements/cards/analytics/GoalOverview'
import CardChat from '../../apps/CardChat';
import Earnings from '../../ui-elements/cards/analytics/Earnings'

import CardTransactions from '../../ui-elements/cards/advance/CardTransactions'
import OrdersBarChart from '../../ui-elements/cards/statistics/OrdersBarChart'
import ProfitLineChart from '../../ui-elements/cards/statistics/ProfitLineChart'
import { Col, Row } from 'antd'
import { SubTitle } from 'chart.js'

const items = [
  {
    src: 'https://picsum.photos/id/123/1800/390',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/456/1800/390',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/678/1800/390',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
];
export default function CaseDetails(args) {
    const {id} = useParams()
    const [data,setData] = useState([])
    const [arr,setArr] = useState([])
    const { colors } = useContext(ThemeColors)
    const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
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

    useEffect(()=>
    {
        setData(JSON.parse(localStorage.getItem('CustomerCaseSet')))
        setArr(data.filter(e=>e.id===id))
    })

    const [modal, setModal] = useState(false);
    const toggle1 = () => setModal(!modal);
    
    const handleRemove=()=>
  { 
   
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
    
    
    const remove = data.filter(t=>t.id!==id)
    
    localStorage.setItem("CustomerCaseSet",JSON.stringify(remove));
    navigate("/customer/manageCases")
 }

 const AnyReactComponent = ({ text }) => <div>{text}</div>;

 const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627
  },
  zoom: 20,
  controlSize:5,
  
};

 const star =3;
  return (
    <>

       <div > <Button color='' className='p-0 border-0' tag={Link} to={"/customer/manageCases"} ><ArrowLeft size={27}  style={{cursor:"pointer"}}/> </Button> </div>
        {
            arr.map((e)=>
            {
                return (
                  <div className='container-lg'>
                    
                    <div className='text-center d-flex justify-content-center align-items-end position-relative '>
                      <h2> {(e.Title+"").charAt(0).toUpperCase()+(e.Title+"").substring(1)} </h2>
                       <div className=' position-absolute start-0  d-flex ps-1 '> <Button color='' className='text-success border-0' style={{cursor:"default"}}>Code - 1432</Button>  </div>
                       <div className=' position-absolute end-0  d-flex ps-1 '> <Button color='' onClick={toggle1}  className='text-danger border-0'>Delete</Button> </div>
                    </div>
                    <hr />

<div className='row match-height'>

<div className=' col-md-8 col-12'>
  <Card className='w-100'>
   
  <CardBody >
   <CardTitle className='d-flex'><Info size={23}/>&nbsp;&nbsp;&nbsp;<h4>Case Details</h4> </CardTitle>
    <div className='d-flex align-items-center'> 

    <div >
   <div className='mt-1 row'>
    <div  className=' col-lg-6'>  <b> Case created on : </b>  {e.date} </div> 
    <div  className='col-lg-6'>  <b> Case Id : </b>  {e.id} </div>  
    </div>
    <div className='row mt-1'>
    <div  className=' d-flex col-lg-6'><h6>Service Type : </h6> &nbsp; Installation  </div>
    <div  className=' d-flex col-lg-6'><h6>Subservice Type : </h6> &nbsp; Parts to be installed</div>
    </div>
    <div className='row mt-1'>
    <div  className=' d-flex col-lg-6'><h6>Service Category : </h6> &nbsp; Category 1</div>
    <div  className=' d-flex col-lg-6'><h6>Service Subcategory : </h6> &nbsp; Subcategory 2</div>
    </div>
    <hr />
    <div className='row mt-1'>
    <div  className=' d-flex col-lg-6'><h6>Service Application : </h6> &nbsp; Timber Door</div>
    <div  className=' d-flex col-lg-6'><h6>Time Slot Booked : </h6> &nbsp; 10 am - 2 pm &nbsp;  <Sun size={20}  /></div>
    </div>
    <hr />
    <div className='row mt-1'>
    <h6 >Case Description :</h6>
    <div className='text-justified'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quis delectus tempore numquam! Maxime nemo vitae corrupti laudantium, inventore ullam repellendus tenetur aspernatur, omnis a illo soluta quae accusantium. Distinctio! </div> 
    </div>
    <div className='row mt-1'>
    <h6>Address :</h6>
    <div  className='text-justified'> Lorem ipsum dolor sit amet conseumquampti laudandus tenetur aspernatur, omnis a illo soluta quae accusantium. Distinctio! </div> 
    </div>
    </div>
    </div>
  </CardBody>
  </Card>
  </div>

  <div className='col-md-4 col-12  d-flex'>
  <Card>
              <CardBody>
                <CardTitle className='d-flex position-relative '><User size={23}/>
                &nbsp;&nbsp;&nbsp;<h4>Workman Details</h4> 
                {/* <h6 className='position-absolute end-0  text-center'> <Badge color="success" >
                  Assigned
                    </Badge></h6> */}
                </CardTitle>
               
                <div className='row gap-1'>
                  <div className="col-12"><b>Workman status :</b> <span className='text-success'>Assigned</span></div>
                  <div className="col-12"><b>Skill :</b> none</div>
                  <div className="col-12 d-flex align-items-center"><b>Level :</b>
                  &nbsp; <AiFillStar color={(star>=1)?"#fcc80d":"gray"} size={19}/> 
                  &nbsp; <AiFillStar color={(star>=2)?"#fcc80d":"gray"} size={19}/> 
                  &nbsp; <AiFillStar color={(star>=3)?"#fcc80d":"gray"} size={19}/> 
                  &nbsp; <AiFillStar color={(star>=4)?"#fcc80d":"gray"}  size={19}/> 
                  &nbsp; <AiFillStar color={(star>=5)?"#fcc80d":"gray"}  size={19}/> 
                   </div>
              
                </div>
                
                <hr />
                <div className='row gap-1'>
                
                  <div className="col-12"><b>Workman Location :</b> Andheri</div>
                  <div className='col-12' style={{ height: '200px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        zoomControl= {false}
 
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
                  
       <div className='row match-height'>

                    <div className='col-lg-8'>
                      <Card>
                   <Carousel
                    
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel> </Card></div>

    <Button color='' className='col-lg-4 py-0 px-1 border-0' tag={Link}  to={`/customer/ProgressDetails/${id}`}>
                  <GoalOverview  success={colors.success.main}  />
                  </Button>
                   </div>


                   
                   
                    <div className='row match-height'>
                    <div className='col-lg-6'>
                  <CardChat/>
                  </div>
                    <div className='col-lg-6'>
                    <UserTimeline/>
                  </div>
                  
                    </div>
                    <div className='row match-height'>
                    <div className='col-lg-6'>
                      <div className='row'>
                        <div className='col-6'><OrdersBarChart warning={colors.warning.main}/></div> 
                        <div className='col-6'><ProfitLineChart info={colors.info.main}/></div>
                      </div>
                      <div className='row'>
                        <div className='col-12'>
                    <Earnings success={colors.success.main} /></div></div>
                  </div>
                  <div className='col-lg-6'>
                  <CardTransactions/>
                  </div>
                    </div>









                    <Modal isOpen={modal} toggle={toggle1} {...args}>
              <ModalHeader toggle={toggle1}>Confirm</ModalHeader>
              
              <ModalBody>
                  Do you want to decline this case ?
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={m=>handleRemove()}>
                 Yes
                </Button>{' '}
                <Button color="secondary" onClick={toggle1}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
                    </div>
                )
            })
        }
      
    
    </>
  )
}
