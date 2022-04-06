import Image from "next/image";
import * as S from "./styles";

export const AboutCard = () => (
  <S.Content>
    <S.ProfileImage>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="profile-image" src="/stella.png" alt="Stella Lustosa" />
    </S.ProfileImage>
    <S.AboutMessageBox>
      Oi, meu nome é Stella Lustosa, cresci ao redor de um fogão a lenha, tacho
      de cobre e panelas numa chácara lá no Goiás, onde passava boa parte do
      tempo com meus avós maternos. Aprendi com eles os sabores e as delícias de
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      uma boa comida caseira. Criei o "Conserva em Família" para chegar à sua
      mesa, com o sabor artesanal, o tempero especial de meu pai e muito amor em
      todo o processo.
    </S.AboutMessageBox>
    <S.NameLabel>Stella Lustosa</S.NameLabel>
    <S.RoleLabel>Fundadora e Cozinheira

</S.RoleLabel>
  </S.Content>
);
