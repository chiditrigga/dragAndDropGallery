import { useSortable } from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
export function Sortable(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Col md={4}>
      <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
        <Card>
          <Card.Img src={props.title} />

          <Card.Footer className="ps-0">{props.tag}</Card.Footer>
        </Card>
      </div>
    </Col>
  );
}