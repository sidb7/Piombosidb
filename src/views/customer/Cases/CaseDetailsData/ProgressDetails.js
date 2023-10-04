import React, { Component } from "react";
import Slider from "react-slick";
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";
import "./DotsStyle.css"
import { ArrowLeft, ArrowRight } from "react-feather";
import { Link, useParams } from "react-router-dom";
import { Button, Card, CardTitle } from "reactstrap";

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }
class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      activeSlide: 0,
      id:""
    };
 
  }

 
  componentDidMount() {
    let {id }= this.props.params;
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
      activeSlide: 0,
      id:id
    });

      
       
  }
 
  render() {
   
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
          {
            src: 'https://picsum.photos/id/618/800/450',
            altText: 'Slide 3',
            caption: 'Slide 3',
            key: 3,
          },
          {
            src: 'https://picsum.photos/id/128/800/450',
            altText: 'Slide 3',
            caption: 'Slide 3',
            key: 3,
          },
          {
            src: 'https://picsum.photos/id/645/800/450',
            altText: 'Slide 3',
            caption: 'Slide 3',
            key: 3,
          },
          {
            src: 'https://picsum.photos/id/622/800/450',
            altText: 'Slide 3',
            caption: 'Slide 3',
            key: 3,
          },
          {
            src: 'https://picsum.photos/id/348/800/450',
            altText: 'Slide 3',
            caption: 'Slide 3',
            key: 3,
          },
      ];

    return (
        <>
      <h2 className="d-flex align-items-center"> <Button color=""  tag={Link} to={`/customer/CaseDetails/${this.state.id}`} className="p-0 border-0"><ArrowLeft size={28} /></Button>&nbsp; Progress Details</h2>

      
      <div className="container-lg mt-1">
        
        {/* <h4>First Slider {this.state.activeSlide}</h4> */}
        <Slider
        infinite={false}
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
    arrows={false}
    afterChange={current => this.setState({ activeSlide: current })} 
    dots={true}

  
	
        >
            {items.slice(0).reverse().map((e)=>
            {
                return (
                    <div className="d-flex justify-content-center">
          <img   src={e.src} alt="" />
          </div>
                )
            })}
          
          
        </Slider>
      <div className="d-flex position-relative my-2 mx-1"> 
      <div  className="position-absolute start-0" onClick={ ()=> this.slider2.slickPrev()} style={{cursor:"pointer",color:(this.state.activeSlide!=0)?"white":"gray"}} ><ArrowLeft/> Newer</div>
      <div className="position-absolute end-0"   onClick={ ()=>   this.slider2.slickNext()} style={{cursor:"pointer",color:(this.state.activeSlide<items.length-1)?"white":"gray"}}>Older <ArrowRight/></div>
      </div> 

      
        <Slider
            infinite={false}
            asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
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
                )
            })}
         

        </Slider>
      </div> </>
    );
  }
}
export default withParams(AsNavFor);