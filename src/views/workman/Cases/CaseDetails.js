import React, { useContext, useEffect, useState } from 'react'
import { ArrowLeft, Tag } from 'react-feather'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button, Card, CardBody, CardTitle, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { ThemeColors } from '@src/utility/context/ThemeColors'
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
        setData(JSON.parse(localStorage.getItem('WorkmanCaseSet')))
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
    
    localStorage.setItem("WorkmanCaseSet",JSON.stringify(remove));
    navigate("/workman-Individual/manageCases")
 }


  return (
    <>

       <div > <Link to={"/workman-Individual/manageCases"} ><ArrowLeft size={27}  style={{cursor:"pointer"}}/> </Link> </div>
        {
            arr.map((e)=>
            {
                return (
                  <div className='container-lg'>
                    
                    <div className='text-center d-flex justify-content-center align-items-end position-relative '>
                      <h2> {(e.Title+"").charAt(0).toUpperCase()+(e.Title+"").substring(1)} </h2>
                       <div className=' position-absolute start-0  d-flex ps-1 '> <h5 className='text-success'>Code - 4234</h5> </div>
                       
                    </div>
                    <hr />

<div className='row match-height'>

<div className='col-lg-9 col-12'>
  <Card className='w-100'>
   
  <CardBody>
  
    <div className='text-justified p-1 rounded-2  ' style={{border:"1px solid gray"}}> 
   
    <h4>Case Details</h4> 
   
    <div  className='mb-1 mt-2'>  <b> Case created on : </b>  {e.date} </div> 
    <div  className='mb-1'>  <b> Case Id : </b>  {e.id} </div>   
    <div  className='mb-1 d-flex'><h6>Service Type : </h6> &nbsp; Installation</div>
    <h6 >Case Description:</h6>
    <div> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quis delectus tempore numquam! Maxime nemo vitae corrupti laudantium, inventore ullam repellendus tenetur aspernatur, omnis a illo soluta quae accusantium. Distinctio! </div> 
    
    </div>
  </CardBody>
  </Card>
  </div>

  <div className='col-lg-3 col-12  d-flex'>
  <Card>
              <CardBody>
                <CardTitle>Workman Details</CardTitle>
                <Row>
                  <Col xs="12">
                    <Row xs="1">
                      <Col>
                      
                          <b>Skill Requirement : </b>Skills
                       
                      </Col>
                    </Row>
                    <br />
                    <Row xs="1">
                      <Col>
                  
                          <b>Minimum Level :</b> Level
                  
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <hr />
                <Row className='gap-2' xs="1" md="3">
                 
                  <Col >
                    <Button className="btn"   >
                      Accept
                    </Button>
                  </Col>
                  <Col > <div  style={{cursor:"pointer"}} onClick={toggle1}  > 
                  <Button className="btn btn-danger"   >
                      Decline
                    </Button>
                        </div> </Col>
                </Row>
              </CardBody>
            </Card>
  </div>
  </div>
                   <div className='row match-height'>

                  <div className='col-lg-4'>
                  <GoalOverview success={colors.success.main}  />
                  </div>

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
