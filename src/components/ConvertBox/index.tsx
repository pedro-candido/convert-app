import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { RootState } from '../../store/configureStore.store';
import { getConvert, userConvertion } from '../../reducers/Convert.reducer'
import { useParams, useHistory } from "react-router-dom";
import { InputStyled, LabelStyled } from './style'

interface ConvertionProps {
    "code": string,
    "codein": string,
    "name": string,
    "high": string,
    "low": string,
    "varBid": string,
    "pctChange": string,
    "bid": string,
    "ask": string,
    "timestamp": string,
    "create_date": string
}

interface ConvertBoxProps {
    currency: string
}

export const ConvertBox = ({ currency }: ConvertBoxProps) => {
    const [value, setValue] = useState('')
    const convertion = useSelector((state: RootState) => Object.values(state.data)[0] as ConvertionProps);
    const { value: conversionValue } = useSelector((state: RootState) => state)
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        getConvert(dispatch, currency);
    }, [dispatch, currency])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value);
    const handleClick = () => {
        let valueConverted = Number(convertion.ask) * Number(value);
        dispatch(userConvertion(valueConverted));
        history.push('/result')
    }

    return (
        <div>
            <LabelStyled htmlFor="value-to-convert"> Valor: </LabelStyled>
            <InputStyled
                name="value-to-convert"
                id="value-to-convert"
                onChange={handleChange}
                type="number"
                value={value}
            />
            <button onClick={handleClick}>Converter</button>
        </div>
    )
}