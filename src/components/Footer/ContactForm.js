import React, { useState } from "react";
import { Box, Button } from "@mui/material";
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
  const [formMessage, setformMessage] = useState("");

  function sendEmail(event) {
    event.preventDefault();

    if (formName === "" || formEmail === "" || formMessage === "") {
      alert("Preencha todos os campos");
      return;
    }

    alert("test");
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
          <StyledTextField placeholder="(__)_________" />
        </Box>
        <Box>
          <StyledButtonIcon>Assunto</StyledButtonIcon>
          <StyledTextField placeholder="Digite aqui" />
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
        </Button>
      </Box>
    </form>
  );
};

export default ContactForm;
