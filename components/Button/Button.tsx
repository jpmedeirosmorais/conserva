import { ButtonProps } from './interfaces'
import * as S from "./styles";

export const Button = ({label}: ButtonProps) => <S.Content>{label}</S.Content>;
