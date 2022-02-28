import * as S from "./styles";
import { NavbarProps } from "./interfaces";

export const Navbar = ({ items }: NavbarProps) => (
  <S.Content>
    <S.Brand>Brand</S.Brand>

    <S.Items>
      {items.map((item) => (
        <S.Item key={item} className="item">
          {item}
        </S.Item>
      ))}
    </S.Items>
  </S.Content>
);
