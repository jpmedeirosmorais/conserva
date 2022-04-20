import { HomeProps } from "./interfaces";
import * as S from "./styles";
import Image from "next/image";

export const Home = () => {
  return (
    <S.Container>
      <Image
        src="/section1.png"
        alt="My Image"
        width="100%"
        height="75%"
        layout="responsive"
      />
    </S.Container>
  );
};
