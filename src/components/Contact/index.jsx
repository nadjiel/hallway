import emailjs from "@emailjs/browser";

import { useState } from "react";

import { Title } from "../Title";

import { Container, Form, Label, Input, Textarea, Button, Popup } from "./style";

export function Contact() {
  const [ name, setName ] = useState("");
  const [ mail, setMail ] = useState("");
  const [ message, setMessage ] = useState("");
  const [ feedback, setFeedback ] = useState("");
  const [ feedbackStatus, setFeedbackStatus ] = useState("positive");

  const clear = () => {
    setName('');
    setMail('');
    setMessage('');
  }

  const submit = e => {
    e.preventDefault();

    emailjs.send(
      "hallway_contact_service",
      "hallway_contact_template",
      { name, mail, message },
      /* public key */
    )
    .then(res => {
      clear();
      setFeedback("Sent!");
      setFeedbackStatus("positive");
    })
    .catch(err => {
      setFeedback("Something went wrong! Try again later or try using my social media on the footer to contact me.");
      setFeedbackStatus("negative");
    })
  }

  return (
    <Container>
      <Title>Reach me out!</Title>
      <Form onSubmit={ submit }>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          value={ name }
          onChange={ e => setName(e.target.value) }
          placeholder="Your name"
        ></Input>
        <Label htmlFor="mail">Mail*</Label>
        <Input
          id="mail"
          type="email"
          value={ mail }
          onChange={ e => setMail(e.target.value) }
          placeholder="Your email"
          required
        ></Input>
        <Label htmlFor="message">Message*</Label>
        <Textarea
          id="message"
          value={ message }
          onChange={ e => setMessage(e.target.value) }
          placeholder="What's up?"
          required
        ></Textarea>

        <Popup status={ feedbackStatus }>{ feedback }</Popup>

        <Button type="submit">Send message</Button>
      </Form>
    </Container>
  );
}