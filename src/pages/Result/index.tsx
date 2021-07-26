import { useSelector } from 'react-redux';
import { RootState } from '../../store/configureStore.store'

export const Result = () => {
    const { value: conversionValue } = useSelector((state: RootState) => state)

    console.log(conversionValue);

    return (
        <>
            {conversionValue}
        </>
    );
}