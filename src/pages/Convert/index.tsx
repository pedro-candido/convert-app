interface ConvertProps {
    currency: string;
}

const Convert = ({ currency }: ConvertProps) =>{
    return ( 
       <>
            { currency === 'EUR' && 
                <div>
                    Euro
                </div>
            }
            { currency === 'USD' && 
                <div>
                    Dolar
                </div>
            }
       </> 
    );
}