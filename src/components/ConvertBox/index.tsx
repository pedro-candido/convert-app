import { useState } from 'react'

interface ConvertBoxProps {
    currency: string
}

export const ConvertBox = ({currency}: ConvertBoxProps) => {
    const [value, setValue] = useState('')


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value);

    return (
        <div>
            <h3>{currency}</h3>

            <label htmlFor="value-to-convert"> Valor: </label>
            <input
                name="value-to-convert"
                id="value-to-convert"
                onChange={handleChange}
                type="number"
                value={value}
            />
            
        </div>
    )
}