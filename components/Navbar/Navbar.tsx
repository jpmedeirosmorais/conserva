import * as S from "./styles";
import { NavbarProps } from "./interfaces";
import { IconBrand } from "../../common/assets/icons";

export const Navbar = ({ items }: NavbarProps) => (
  <S.Content>
    <S.Brand><IconBrand /></S.Brand>

    <S.Items>
      {items.map((item) => (
        <S.Item key={item}>
          {item}
        </S.Item>
      ))}
    </S.Items>
  </S.Content>
);
