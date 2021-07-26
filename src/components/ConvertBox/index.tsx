import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { RootState } from '../../store/configureStore.store';
import { getConvert, userConvertion, valueToConvert, userCurrency } from '../../reducers/Convert.reducer'
import { useHistory } from "react-router-dom";
import { InputStyled, LabelStyled, ConvertBoxContainer, ButtonStyled, ButtonsWrapper } from './style';
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

interface ConvertionProps {
    code: string,
    codein: string,
    name: string,
    high: string,
    low: string,
    varBid: string,
    pctChange: string,
    bid: string,
    ask: string,
    timestamp: string,
    create_date: string
}

interface ConvertBoxProps {
    currency: string
}

export const ConvertBox = ({ currency }: ConvertBoxProps) => {
    const [value, setValue] = useState('')
    const convertion = useSelector((state: RootState) => Object.values(state.data)[0] as ConvertionProps);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        getConvert(dispatch, currency);
    }, [dispatch, currency])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value);

    const showError = () => {
        toast.dark('😲 Opa, digite um número', {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    const handleClick = () => {
        if (Number(value)) {
            let valueConverted = Number(convertion.ask) * Number(value);
            dispatch(userConvertion(valueConverted));
            dispatch(valueToConvert(value));
            dispatch(userCurrency(currency));
            history.push('/result');
        } else {
            showError();
        }
    }

    return (
        <ConvertBoxContainer>
            <ToastContainer />
            <LabelStyled htmlFor="value-to-convert"> Valor </LabelStyled>
            <InputStyled
                name="value-to-convert"
                id="value-to-convert"
                onChange={handleChange}
                type="number"
                value={value}
            />
            <ButtonsWrapper>
                <ButtonStyled onClick={() => history.push('/')}>
                    Voltar
                </ButtonStyled>
                <ButtonStyled onClick={handleClick}>
                    Converter
                </ButtonStyled>
            </ButtonsWrapper>
        </ConvertBoxContainer>
    )
}