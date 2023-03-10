import styled from "styled-components";
import { Indents, Media } from "ui";
import { motion } from "framer-motion";

const FavoritesRow = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 40px;
  padding-top: ${Indents.LG};
  padding-bottom: ${Indents.XL};

  ${Media.XL} {
    grid-template-columns: repeat(2, 1fr);
    row-gap: ${Indents.SM};
  }

  ${Media.MD} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const EmptyList = styled.h1`
  grid-column: 1 / 4;
  text-align: center;
`;

export { FavoritesRow, EmptyList };
