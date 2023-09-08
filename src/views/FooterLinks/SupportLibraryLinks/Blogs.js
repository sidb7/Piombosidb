import React from 'react'
import {Card, CardBody, CardImg, CardImgOverlay, CardLink, CardText, CardTitle, ListGroup, ListGroupItem} from "reactstrap"

const data = [
    {
        image:"https://picsum.photos/300/200",
        Title:"",
        Text:"",
        Link:""
    },
    {
        image:"https://picsum.photos/300/200?random=1",
        Title:"",
        Text:"",
        Link:""
    },
    {
        image:"https://picsum.photos/300/200?random=2",
        Title:"",
        Text:"",
        Link:""
    },
    {
        image:"https://picsum.photos/300/200/?blur",
        Title:"",
        Text:"",
        Link:""
    },
    {
        image:"https://picsum.photos/300/200?random=3",
        Title:"",
        Text:"",
        Link:""
    },
    {
        image:"https://picsum.photos/300/200?random=4",
        Title:"",
        Text:"",
        Link:""
    }
]


export default function Blogs() {



  return (
    <>
     <div className='row'>
     <Card className="my-2">
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/1000/300"
      style={{
        height: 300
      }}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        Card Title
      </CardTitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <CardText>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
      </CardText>
    </CardBody>
  </Card>
     </div>
      <hr />
   <div className='row ' >

   
    {data.map((e)=>
    {
        return (
            <div className='col-lg-3 col-md-3 col-12 d-flex justify-content-center' style={{borderRight:"1px solid gray",borderLeft:"1px solid gray"}} >
            <Card
            style={{
              width: '100%',
           
             borderRadius:"5px"
            }}
          >
            <img
              alt="Card"
              src={e.image}
              style={{borderRadius:"5px 5px 0px 0px"}}
            />
            <CardBody>
              <CardTitle tag="h5">
                Card Title
              </CardTitle>
              <CardText>
                This is some text within a card body.
              </CardText>
            </CardBody>
           
            <CardBody>
              <CardLink href="#">
                Read more
              </CardLink>
             
            </CardBody>
            <hr />
          </Card>
          
          </div>

        );
    })}
  

</div>
</>
  )
}
