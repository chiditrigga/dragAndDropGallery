import { useSortable } from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useState } from "react";
import "./index.css";
import Spinner from 'react-bootstrap/Spinner';
export function Sortable(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const [isLoading,setIsLoading] = useState(true)

  const onLoad = () => {
    setIsLoading(false)
  };

  return (
    <>
      
      <Col xs={4} md={3} className="mx-0">
         <div
          className="map mx-0 w-100"
          ref={setNodeRef}
          style={style}
          {...attributes}
          {...listeners}
        >
          {isLoading?<div className="d-flex align-items-center justify-content-center" style={{height:"150px"}}><Spinner  animation="border" /> </div> :  <Card className="w-100">
          <Card.Img className="img2" fluid   src={props.title} />
          <Card.ImgOverlay>
       
      
        <Card.Text className="text-white align-items-end h-100 d-flex">{props.tag}</Card.Text>
      </Card.ImgOverlay>
          </Card>}
          
          <Card className={!isLoading && "d-none"}>
          <Card.Img  onLoad={onLoad} src={props.title} />

          
          </Card>
         
        </div>
       
      </Col>
    </>
  );
}
