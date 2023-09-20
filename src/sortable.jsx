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
      <Col xs={4} md={3}>
         <div
          className="map"
          ref={setNodeRef}
          style={style}
          {...attributes}
          {...listeners}
        >
          {isLoading? <Spinner animation="border" /> :  <Card>
          <Card.Img   src={props.title} />
          </Card>}
          
          <Card className={!isLoading && "d-none"}>
          <Card.Img  onLoad={onLoad} src={props.title} />

          
          </Card>
         
        </div>
       
      </Col>
    </>
  );
}
