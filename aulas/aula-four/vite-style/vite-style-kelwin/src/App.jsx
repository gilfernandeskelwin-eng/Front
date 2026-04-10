import React from "react";
import BoasVindas from "./components/BoasVindas";
import ButtonCss from "./components/ButtonCss";
import { ButtonStyled } from "./components/ButtonStyled";

export default function App() {
  return (
    <React.Fragment>
      {/* <ButtonModule
        text="button module"
        highlight={true}
      />
      <BoasVindas nome="Kelwin" />
      <ButtonCss text="button module" highlight={true} /> */}

      <ButtonStyled />
    </React.Fragment>
  );
}

secondary = true;
text = "Button Styled";
