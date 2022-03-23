import { HomeProps } from './interfaces';
import { ProductCard } from '../../containers/ProductCard';
import * as S from './styles';

export const Home = ({products}: HomeProps) => {
    return (
        <S.Container>
            {products.map(product => (
                <ProductCard key={product.id} {...product} />
            ))}
        </S.Container>
    );
}