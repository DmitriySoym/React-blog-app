import styled from "styled-components";
import { Typography, Color } from "ui";
import { motion } from "framer-motion";

const StyledAccountInfo = styled(motion.div)`
  position: fixed;
  top: 97px;
  right: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 200px;
  height: 100px;
  background-color: ${Color.BACKGROUND};
  box-shadow: 0px 12px 40px 9px rgb(0 0 0 / 10%);
  text-align: center;
  z-index: 10;
  cursor: pointer;
`;

const Text = styled.span`
  ${Typography.BODY_TWO}
  color: ${Color.TEXT_FOOTER};
`;

const Name = styled.span`
  ${Typography.BODY_TWO}
`;

const Button = styled.button`
  width: 60%;
  padding: 0 5px;
  background-color: ${Color.PRIMARY};
  border-radius: 4px;
  ${Typography.BODY_TWO};
  color: ${Color.WHITE};
  font-weight: 400;
`;
export { StyledAccountInfo, Text, Button, Name };
