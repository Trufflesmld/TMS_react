import * as s from "./styles";

type ITitle = {
  titleText: string;
};

export const Title = ({ titleText }: ITitle) => {
  return <s.TitleText>{titleText}</s.TitleText>;
};
