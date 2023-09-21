import Brush from "./images/brush.jpg";
import Brush2 from "./images/painting.jpg";
import newyork from "./images/newyork.jpg";
import turtel from "./images/turtel.jpg";
import nature from "./images/nature.jpg";
import nature2 from "./images/nature2.jpg";
import city from "./images/city.jpg";
import flower from "./images/flower.jpg";


import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { Sortable } from "./sortable";
import Form from "react-bootstrap/Form";
import "./index.css";


import { DndContext, closestCenter } from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
  verticalListSortingStrategy,
  rectSortingStrategy,
} from "@dnd-kit/sortable";

import { useState } from "react";

const Body = () => {
  const [list, setList] = useState([
    {
      title: Brush,
      id: crypto.randomUUID(),
      tag: "ART",
    },
    { title: Brush2, id: crypto.randomUUID(), tag: "ART" },
    {
      title: newyork,
      id: crypto.randomUUID(),
      tag: "CITY",
    },
    { title: turtel, id: crypto.randomUUID(), tag: "ANIMAL" },
    { title: city, id: crypto.randomUUID(), tag: "CITY" },

    { title: flower, id: crypto.randomUUID(), tag: "FLOWER" },
    { title: nature, id: crypto.randomUUID(), tag: "NATURE" },
    { title: nature2, id: crypto.randomUUID(), tag: "NATURE" },
  ]);

  const [filters, setFilters] = useState("");

  const handleDrag = (event) => {
    const { active, over } = event;

    setList((users) => {
      const oldIndex = users.findIndex((user) => user.id === active.id);
      const newIndex = users.findIndex((user) => user.id === over.id);
      return arrayMove(list, oldIndex, newIndex);
    });
  };

  const handleFilter = (e) => {
    if (filters === "") {
      return list;
    }
    return list.filter((fil) => fil.tag === filters.toUpperCase());
  };

  return (
    <>
      <Container fluid className="px-0"> 
        <div className="img ">
          <Row className="py-3 text-white">
            <Col xs={6}>Home</Col>
            <Col xs={6} className="text-end">sign up</Col>
          </Row>
            <Row className="align-items-center d-flex mx-auto h-50 w-100">
    
        <h1 className="text-white text-center">Gallery Website</h1>
       
          
        
           <Form className="search mx-auto" onSubmit={(e) => e.preventDefault()}>
            <Form.Control
              className="text-uppercase"
              onChange={(e) => setFilters(e.target.value)}
              value={filters}
              type="text"
              placeholder="search category"
            />
          </Form> 
        
         
        
          </Row>
        </div>
      </Container>
       

       
      <Container>
        <Row className="py-3">
        <div className="d-flex  scrol border-0 shadow-sm ">
          
          <Col className="px-0 " xs={3} md={2}>
            <Button onClick={() => setFilters("")} className="tag w-100">ALL</Button>
          </Col>
          <Col className="px-0 " xs={3} md={2}>
            <Button onClick={() => setFilters("nature")} className="tag w-100">Nature</Button>
          </Col>
          <Col className="px-0 " xs={3} md={2}>
            <Button  onClick={() => setFilters("animal")} className="tag w-100">Animal</Button>
          </Col>
          <Col className="px-0 " xs={3} md={2}>
            <Button onClick={() => setFilters("city")} className="tag w-100">City</Button>
          </Col>
          <Col className="px-0 " xs={3} md={2}>
            <Button onClick={() => setFilters("flower")} className="tag w-100">Flower</Button>
          </Col>
          <Col className="px-0 " xs={3} md={2}>
            <Button onClick={() => setFilters("art")} className="tag w-100">Art</Button>
          </Col>
                  </div>
        </Row>

        <Row>
          <DndContext collisionDetection={closestCenter} onDragEnd={handleDrag}>
            <SortableContext items={list} strategy={rectSortingStrategy}>
              {handleFilter().length > 0
                ? handleFilter().map((lis) => (
                    <Sortable
                      key={lis.id}
                      id={lis.id}
                      title={lis.title}
                      tag={lis.tag}
                    />
                  ))
                : "not found"}
            </SortableContext>
          </DndContext>
        </Row>
      </Container>
    </>
  );
};

export default Body;
