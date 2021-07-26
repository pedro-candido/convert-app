import { useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore.store';
import { ConvertedContainer, ConvertedContainerWrapper, ButtonContainerWrapper } from './style'
import { ButtonStyled } from '../../components/ConvertBox/style'
import { useHistory } from 'react-router-dom'

export const Result = () => {
    const { value: conversionValue, valueToConvert, currency } = useSelector((state: RootState) => state);
    const history = useHistory();


    return (
        <ConvertedContainer>
            <ConvertedContainerWrapper>
                {currency === 'USD' ? '$' : '€'}{valueToConvert} {'>'} R${Number(conversionValue).toFixed(2)}
             </ConvertedContainerWrapper>
             <ButtonContainerWrapper>
                <ButtonStyled onClick={() => history.push(`/convert/${currency}`)}>
                    Voltar
                </ButtonStyled>
                <ButtonStyled onClick={() => history.push('/')}>
                    Início
                </ButtonStyled>
             </ButtonContainerWrapper>
        </ConvertedContainer>
    );
}