import * as S from "./styles";

export const Type = ({ type }: { type: string }) => (
    <S.Content>{type.toUpperCase()}</S.Content>
);