import { useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore.store';
import { ConvertedContainer } from './style'

export const Result = () => {
    const { value: conversionValue, valueToConvert } = useSelector((state: RootState) => state);


    return (
        <ConvertedContainer>
            {valueToConvert}
            {'>'}
            {Number(conversionValue).toFixed(2)}
        </ConvertedContainer>
    );
}