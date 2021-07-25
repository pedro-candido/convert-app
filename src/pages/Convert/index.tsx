import { useParams } from "react-router-dom";
import { Title, ConvertBox } from '../../components'
import { api } from '../../api'

interface ParamProps {
  currency: string;
}

export const Convert = () => {
  const { currency } = useParams<ParamProps>();

  const handleClick = async () => {
    const { data } = await api.get(`${currency}-BRL`);
    console.log(data)
  }

  return (
    <>
      <Title>Conversão - {currency === 'USD' ? 'Dolar' : 'Euro'}</Title>
      <ConvertBox currency={currency}/>
      <button onClick={handleClick}>Converter</button>
    </>
  );
};
