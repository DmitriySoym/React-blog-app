import styled from "styled-components";
import { Indents, Typography, Color, Media } from "ui";
import { motion } from "framer-motion";

const StyledDetailPage = styled(motion.div)`
  flex: 1 0 auto;
  max-width: 1120px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-top: ${Indents.XL};
  padding-bottom: ${Indents.XL};

  ${Media.XL} {
    padding-left: ${Indents.SM};
    padding-right: ${Indents.SM};
  }

  ${Media.MD} {
    padding-left: ${Indents.XXS};
    padding-right: ${Indents.XXS};
  }
`;

const Button = styled.button`
  background-color: inherit;
  ${Typography.Subline};
`;

const Post = styled.span`
  ${Typography.Subline};
  color: ${Color.TEXT_FOOTER};
`;

const Navigation = styled.div`
  padding-bottom: ${Indents.XS};
`;

const Row = styled.div`
  display: flex;
  column-gap: 33px;
  border-top: 1px solid ${Color.TEXT_FOOTER};

  ${Media.XL} {
    overflow: hidden;
    & li {
      width: 328px;
      flex-shrink: 0;
    }
  }

  ${Media.MD} {
    padding-top: ${Indents.SM};
    & li {
      width: 273px;
    }
  }
`;

const ErrorWrapper = styled.div`
  padding: ${Indents.LG} 0;
  & img {
    display: block;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ErrorMessage = styled.h2`
  ${Typography.H2}
  padding-bottom:${Indents.SM}
`;

export { StyledDetailPage, Button, Navigation, Post, Row, ErrorWrapper, ErrorMessage };
