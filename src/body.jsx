import Brush from "./images/brush.jpg";
import Brush2 from "./images/brush2.jpg";
import newyork from "./images/newyork.jpg";
import turtel from "./images/turtel.jpg";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Sortable } from "./sortable";
import Form from 'react-bootstrap/Form';


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
      tag: "art",
    },
    { title: Brush2, id: crypto.randomUUID(), tag: "art" },
    {
      title: newyork,
      id: crypto.randomUUID(),
      tag: "city",
    },
    { title: turtel, id: crypto.randomUUID(), tag: "animal" },
  ]);

 const [filters,setFilters] = useState("")

 

  const handleDrag = (event) => {
    const {active, over} = event;
   
    setList(users => {
        const oldIndex = users.findIndex(user => user.id === active.id)
        const newIndex = users.findIndex(user => user.id === over.id)
        return arrayMove(list, oldIndex,newIndex)
    })
  };

  const handleFilter = (e) => {
   
     if (filters === ""){
        return list
     }
    return  list.filter( fil => fil.tag === filters);
     
 
  }



  return (
    <>
    <Form onSubmit={(e)=>e.preventDefault()}>
          <Form.Control onChange={ e=> setFilters(e.target.value)} value={filters} type="text" placeholder="Normal text"/>
    </Form>

   
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDrag}>
        <SortableContext items={list} strategy={rectSortingStrategy}>
          <Container>
            <Row>
             
                { handleFilter().map((lis) => (
                <Sortable
                  key={lis.id}
                  id={lis.id}
                  title={lis.title}
                  tag={lis.tag}
                />
              ))}
              
            </Row>
          </Container>
        </SortableContext>
      </DndContext>
      
    </>
  );
};

export default Body;
