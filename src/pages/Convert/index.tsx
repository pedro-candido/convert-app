import { useParams } from "react-router-dom";
import { Title, ConvertBox } from '../../components';
import { ConvertContainer } from './style'

interface ParamProps {
  currency: string;
}

export const Convert = () => {
  const { currency } = useParams<ParamProps>();

  return (
    <ConvertContainer>
      <Title>Conversão - {currency === 'USD' ? 'Dolar' : 'Euro'}</Title>
      <ConvertBox currency={currency} />
    </ConvertContainer>
  );
};
