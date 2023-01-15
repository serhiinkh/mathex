import { useState } from 'react';
import cn from 'classnames';
import './Expression.css';


const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const generateExpression = () => {
    const a = randomNumberInRange(1000, 9999);
    const b = randomNumberInRange(199, 999);
    const operator = Math.floor(Math.random() * 2) === 0 ? '+' : '-';
    return {
        a,
        b,
        operator,
        result: operator === '+' ? a + b : a - b,
        expression: `${a} ${operator} ${b} = ?`,
        isCorrect: false,
    };
}

function Expression({ onCorrect }) {
    const [expression, setExpression] = useState(generateExpression());

    const checkResult = (event) => {
        const result = Number(event.target.value);
        const isCorrect = result === expression.result
        setExpression({
            ...expression,
            isCorrect,
        });

        if (isCorrect) {
            onCorrect();
        }
    };

    return (
        <div className="expression__wrapper">
            <div className="expression">
                <div className="expression__a">{expression.a}</div>
                <div className="expression__operator">{expression.operator}</div>
                <div className="expression__b">{expression.b}</div>
                <div className="expression__line"></div>
                <div className="expression__result_check">
                    <input className={cn({
                        'expression__input': true,
                        'expression__input--correct': expression.isCorrect,
                    })} type="number" onChange={checkResult}/>
                </div>
            </div>
        </div>
    );
}

export default Expression;
