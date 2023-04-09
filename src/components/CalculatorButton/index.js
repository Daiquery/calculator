import './styles.css';

const CalculatorButton = ({value, pressed}) => {   
    console.log(value)
    if(value === "C"){
        console.log("This one's C!")
    }
    return (
        <div className={(value === "C" ? "calculator-button calculator-button--red" : "calculator-button" )} onClick={pressed}>
            {value}
        </div>    

    );

}

export default CalculatorButton;