import { ThemeChangeBlock } from "components";
import { StyledFooter, Text } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <Text>©2022 Blogolog</Text>
      <ThemeChangeBlock />
    </StyledFooter>
  );
};
