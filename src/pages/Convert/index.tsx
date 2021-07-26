import { useParams } from "react-router-dom";
import { Title, ConvertBox } from '../../components';

interface ParamProps {
  currency: string;
}

export const Convert = () => {
  const { currency } = useParams<ParamProps>();

  return (
    <>
      <Title>Conversão - {currency === 'USD' ? 'Dolar' : 'Euro'}</Title>
      <ConvertBox currency={currency} />
    </>
  );
};
