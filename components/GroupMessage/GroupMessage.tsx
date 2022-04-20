import { GroupMessageProps } from "./interface";
import * as S from "./styles";

export const GroupMessage = ({ content }: GroupMessageProps) => (
  <S.Content>
    {content.title !== "" && <S.Title>{content.title}</S.Title>}
    {content.subtitle !== "" && <S.SubTitle>{content.subtitle}</S.SubTitle>}
    {content.details !== "" && <S.Details>{content.details}</S.Details>}
  </S.Content>
);
