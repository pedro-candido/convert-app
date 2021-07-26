import { useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore.store';
import { ConvertedContainer } from './style'

export const Result = () => {
    const { value: conversionValue, valueToConvert, currency } = useSelector((state: RootState) => state);


    return (
        <ConvertedContainer>
             R$ {valueToConvert} {'>'} {currency === 'USD' && '$'}{Number(conversionValue).toFixed(2)}{currency === 'EUR' && '€'}
        </ConvertedContainer>
    );
}