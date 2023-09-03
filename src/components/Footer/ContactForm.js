import React from "react";
import { Box, Button } from "@mui/material";
import {
  StyledButtonIcon,
  StyledTextField,
  getTextfieldContainerStyle,
  StyledTextFieldMessage,
  getButtonStyle,
} from "./ContactForm.styles.tsx";

const ContactForm = () => {
  return (
    <Box>
      <form>
        <Box sx={getTextfieldContainerStyle}>
          <Box>
            <StyledButtonIcon>Digite seu nome</StyledButtonIcon>
            <StyledTextField placeholder="Digite aqui" />
          </Box>
          <Box>
            <StyledButtonIcon>Email</StyledButtonIcon>
            <StyledTextField placeholder="email@exemplo.com.br" />
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
          <StyledTextFieldMessage />
        </Box>
        <Box sx={getButtonStyle}>
          <Button size="large">Enviar Contato</Button>
        </Box>
      </form>
    </Box>
  );
};

export default ContactForm;
