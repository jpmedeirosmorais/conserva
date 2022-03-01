/* eslint-disable @next/next/no-img-element */
import * as S from "./styles";
import { FooterProps } from "./interfaces";
import Image from "next/image";
import Link from "next/link";

export const Footer = ({ medias }: FooterProps) => (
  <S.Content>
    <S.LabelMessage>
      Feito com amor <S.Heart>{"<3"}</S.Heart>
    </S.LabelMessage>
    <S.SocialMedias>
      {medias.map((media, key) => (
        <S.SocialMedia key={key}>
          {/* eslint-disable-next-line @next/next/link-passhref */}
          <Link href={media.link}>
            <img
              src={media.icon}
              alt={media.name}
              width="23px"
              height="23px"
            />
          </Link>
        </S.SocialMedia>
      ))}
    </S.SocialMedias>
  </S.Content>
);
