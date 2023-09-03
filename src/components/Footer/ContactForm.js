import React, { useState } from "react";
import { Alert, Box, Button, Icon, Snackbar } from "@mui/material";
import emailjs from "@emailjs/browser";
import { FaRegPaperPlane } from "react-icons/fa";
import {
  StyledButtonIcon,
  StyledTextField,
  getTextfieldContainerStyle,
  StyledTextFieldMessage,
  getButtonStyle,
} from "./ContactForm.styles.tsx";

const ContactForm = () => {
  const [formName, setFormName] = useState("");
  const [formEmail, setformEmail] = useState("");
  const [formSubject, setformSubject] = useState("");
  const [formMessage, setformMessage] = useState("");
  const [formNumber, setformNumber] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  React.useEffect(() => {
    document
      .querySelector("#phonenumber-id")
      .addEventListener("keypress", function (e) {
        const keyCode = e.keyCode ? e.keyCode : e.wich;

        if (keyCode < 47 || keyCode > 58) {
          e.preventDefault();
        }
      });
  }, []);

  function sendEmail(event) {
    event.preventDefault();

    if (
      formName === "" ||
      formEmail === "" ||
      formSubject === "" ||
      formMessage === "" ||
      formNumber === ""
    ) {
      setIsEmpty(true);
      setTimeout(setIsEmpty, 4000, false);
      return;
    }

    const templaceParams = {
      from_name: formName,
      email: formEmail,
      subject: formSubject,
      message: formMessage,
      number: formNumber,
    };

    emailjs
      .send(
        "service_pvwdm5c",
        "template_ndwklxu",
        templaceParams,
        "NYLnS6euywlCHsXKC"
      )
      .then(
        (response) => {
          console.log("Email Enviado", response.status, response.text);
          setFormName("");
          setformEmail("");
          setformSubject("");
          setformMessage("");
          setformNumber("");
          setIsOpen(true);
          setTimeout(setIsOpen, 2000, false);
        },
        (error) => {
          console.log("Erro", error);
          alert(
            "Falha no envio, por favor, envie o contato pelo endereço de email: felipe.alv14@hotmail.com ou pelo WhatsApp: 11981669996"
          );
        }
      );
  }

  return (
    <form onSubmit={sendEmail}>
      <Box sx={getTextfieldContainerStyle}>
        <Box>
          <StyledButtonIcon>Digite seu nome</StyledButtonIcon>
          <StyledTextField
            placeholder="Digite aqui"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
        </Box>
        <Box>
          <StyledButtonIcon>Email</StyledButtonIcon>
          <StyledTextField
            placeholder="email@exemplo.com.br"
            value={formEmail}
            onChange={(e) => setformEmail(e.target.value)}
          />
        </Box>
      </Box>
      <Box sx={getTextfieldContainerStyle}>
        <Box>
          <StyledButtonIcon>Telefone</StyledButtonIcon>
          <StyledTextField
            id="phonenumber-id"
            placeholder="(__)_________"
            value={formNumber}
            onChange={(e) => setformNumber(e.target.value)}
          />
        </Box>
        <Box>
          <StyledButtonIcon>Assunto</StyledButtonIcon>
          <StyledTextField
            placeholder="Digite aqui"
            value={formSubject}
            onChange={(e) => setformSubject(e.target.value)}
          />
        </Box>
      </Box>
      <Box>
        <StyledButtonIcon>Mensagem</StyledButtonIcon>
        <StyledTextFieldMessage
          value={formMessage}
          onChange={(e) => setformMessage(e.target.value)}
        />
      </Box>
      <Box sx={getButtonStyle}>
        <Button size="large" type="submit">
          Enviar Contato
          <Icon size="medium">
            <FaRegPaperPlane />
          </Icon>
        </Button>
        <Snackbar open={isOpen}>
          <Alert>{"Email Enviado com sucesso!"}</Alert>
        </Snackbar>
        <Snackbar open={isEmpty}>
          <Alert severity="error">
            {"Preencha todos so campos do Formulário"}
          </Alert>
        </Snackbar>
        ;
      </Box>
    </form>
  );
};

export default ContactForm;
