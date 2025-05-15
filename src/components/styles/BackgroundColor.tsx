import { css, Global } from "@emotion/react";

interface Props {
  color: string;
}

export const BackgroundColor = (props: Props) => (
  <Global
    styles={css`
      html {
        background-color: ${props.color};
      }
    `}
  />
);
