import { GroupMessageProps } from "./interface";
import * as S from "./styles";

export const GroupMessage = ({ content }: GroupMessageProps) => (
  <S.Content>
    <S.Title>{content.title}</S.Title>
    <S.SubTitle>{content.subTitle}</S.SubTitle>
    <S.Details>{content.details}</S.Details>
  </S.Content>
);
