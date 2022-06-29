import * as s from "./styles";

type ILink = {
  linkText: string;
  url: string;
  disabled?: boolean;
};

export const Link = ({ linkText, url, disabled }: ILink) => {
  return (
    <s.LinkContainer disabled={disabled}>
      <s.LinkText href={url}>{linkText}</s.LinkText>
    </s.LinkContainer>
  );
};
