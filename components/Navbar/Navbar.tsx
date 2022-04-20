import * as S from "./styles";
import { NavbarProps } from "./interfaces";
import { IconBrand } from "../../common/assets/icons";
import Link from "next/link";

export const Navbar = ({ items }: NavbarProps) => (
  <S.Content>
    <S.Brand>
      <IconBrand />
    </S.Brand>

    <S.Items>
      {items.map((item, key) => (
        <S.Item key={key}>
          <Link href={`/${item.link.toLowerCase()}`}>{item.name}</Link>
        </S.Item>
      ))}
    </S.Items>
  </S.Content>
);
