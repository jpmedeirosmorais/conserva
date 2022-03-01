/* eslint-disable @next/next/no-img-element */
import * as S from "./styles";
import { FooterProps } from "./interfaces";

export const Footer = ({ medias }: FooterProps) => (
  <S.Content>
    <S.LabelMessage>
      Feito com amor <S.Heart>{"<3"}</S.Heart>
    </S.LabelMessage>
    <S.SocialMedias>
      {medias.map((media, key) => (
        <a href={media.link} key={key} target="_blank" rel="noreferrer">
          <S.SocialMedia>{media.icon}</S.SocialMedia>
        </a>
      ))}
    </S.SocialMedias>
  </S.Content>
);
