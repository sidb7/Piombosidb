import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
export default function FAQ() {
    const [open, setOpen] = useState('');
    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }
    };
  return (
    <div>
    <Accordion flush open={open} toggle={toggle}>
      <AccordionItem>
        <AccordionHeader targetId="1">What are the Terms & Conditions?</AccordionHeader>
        <AccordionBody accordionId="1">
          <strong>This is the first item&#39;s accordion body.</strong>
          You can modify any of this with custom CSS or overriding our default
          variables. It&#39;s also worth noting that just about any HTML can
          go within the <code>.accordion-body</code>, though the transition
          does limit overflow.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId="2">How orders are placed?</AccordionHeader>
        <AccordionBody accordionId="2">
          <strong>This is the second item&#39;s accordion body.</strong>
          You can modify any of this with custom CSS or overriding our default
          variables. It&#39;s also worth noting that just about any HTML can
          go within the <code>.accordion-body</code>, though the transition
          does limit overflow.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId="3">How to create & manage cases?</AccordionHeader>
        <AccordionBody accordionId="3">
          <strong>This is the third item&#39;s accordion body.</strong>
          You can modify any of this with custom CSS or overriding our default
          variables. It&#39;s also worth noting that just about any HTML can
          go within the <code>.accordion-body</code>, though the transition
          does limit overflow.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId="4">How to create & manage cases?</AccordionHeader>
        <AccordionBody accordionId="4">
          <strong>This is the third item&#39;s accordion body.</strong>
          You can modify any of this with custom CSS or overriding our default
          variables. It&#39;s also worth noting that just about any HTML can
          go within the <code>.accordion-body</code>, though the transition
          does limit overflow.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId="5">How to create & manage cases?</AccordionHeader>
        <AccordionBody accordionId="5">
          <strong>This is the third item&#39;s accordion body.</strong>
          You can modify any of this with custom CSS or overriding our default
          variables. It&#39;s also worth noting that just about any HTML can
          go within the <code>.accordion-body</code>, though the transition
          does limit overflow.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId="6">How to create & manage cases?</AccordionHeader>
        <AccordionBody accordionId="6">
          <strong>This is the third item&#39;s accordion body.</strong>
          You can modify any of this with custom CSS or overriding our default
          variables. It&#39;s also worth noting that just about any HTML can
          go within the <code>.accordion-body</code>, though the transition
          does limit overflow.
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId="7">How to create & manage cases?</AccordionHeader>
        <AccordionBody accordionId="7">
          <strong>This is the third item&#39;s accordion body.</strong>
          You can modify any of this with custom CSS or overriding our default
          variables. It&#39;s also worth noting that just about any HTML can
          go within the <code>.accordion-body</code>, though the transition
          does limit overflow.
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  </div>
  )
}
