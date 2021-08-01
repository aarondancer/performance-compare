import React from "react";
import styled from "styled-components";
import RenderCount from "./RenderCount";

const InputField = styled.div({
  position: "relative",
});
const StyledInput = styled.input({
  padding: "8px"
});

const Input = React.forwardRef((props, ref) => (
  <InputField>
    <StyledInput ref={ref} {...props} />
    <RenderCount />
  </InputField>
));

export default Input;
