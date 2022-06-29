import * as s from "./styles";

import { Title } from "./components/Title/Title";
import { Link } from "./components/Link/Link";

export const App = () => {
  return (
    <div>
      <Title titleText={"Hello!"} />
      <s.LinksContainer>
        <Link linkText="Link" url="/Link" />
        <Link linkText="LinkDisabled" url="/Disable" disabled={true} />
      </s.LinksContainer>
    </div>
  );
};
