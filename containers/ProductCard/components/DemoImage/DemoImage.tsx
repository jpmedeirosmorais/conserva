import { Component, ReactElement } from "react";
import * as S from "./styles";

export const DemoImage = ({ image }: { image: string }) => (
  <S.Content>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={image} alt="imagem" height="300" width="348" />
  </S.Content>
);
