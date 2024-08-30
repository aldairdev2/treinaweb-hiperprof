import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export const PageTitleContainer = styled("div")`
  margin: ${({theme}) => theme.spacing(5, 0)};
  text-align: center;
`;



export const PageTitleStyled = styled(Typography)`
 text-transform: uppercase;
 font-weight: bold;
`;        