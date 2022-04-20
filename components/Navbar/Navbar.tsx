import * as S from "./styles";
import { NavbarProps } from "./interfaces";
import { IconBrand } from "../../common/assets/icons";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = ({ items }: NavbarProps) => {
  const url = useRouter().pathname.replace("/", "");
  return (
    <S.Content>
      <S.Brand>
        <Link href="/" passHref>
          <IconBrand />
        </Link>
      </S.Brand>


      <S.Items>
        {items.map((item, key) => (
          <S.Item key={key}>
            {item.link !== url && (
              <Link href={`/${item.link.toLowerCase()}`}>{item.name}</Link>
            )}
          </S.Item>
        ))}
      </S.Items>
    </S.Content>
  );
};
