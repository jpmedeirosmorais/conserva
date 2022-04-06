import * as S from "./styles";
import { GroupMessage, AboutCard } from "../../components";

const content = {
    title: "SOBRE NÓS",
    subtitle: "Com amor para você",
    details: "Com amor para você"
}

export const About = () => {
  return (
      <S.Content>
        <GroupMessage content={content} />
        <AboutCard />
      </S.Content>
  );
};
