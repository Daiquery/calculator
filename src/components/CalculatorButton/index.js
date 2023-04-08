import './styles.css';

const CalculatorButton = ({value, pressed}) => {    
    return (
        <div className="calculator-button" onClick={pressed}>
            {value}
        </div>    

    );

}

export default CalculatorButton;