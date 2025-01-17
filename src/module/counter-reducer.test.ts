import { counterReducer, type CounterState,
         setMaxValueAC,
         setMinValueAC,
         incrementAC,
         resetAC,
         loadValuesAC } from './counter-reducer';

let startState: CounterState = {
    maxValue: 5,
    minValue: 0,
    currentValue: 0,
    valueTable: false,
};

// Тест для установки максимального значения
test('set maxValue', () => {
    const endState: CounterState = counterReducer(startState, setMaxValueAC(10));
    
    expect(endState.maxValue).toBe(10);
    expect(endState.currentValue).toBe(0);
});

// Тест для установки минимального значения
test('set minValue', () => {
    const endState: CounterState = counterReducer(startState, setMinValueAC(  3 ));
    
    expect(endState.minValue).toBe(3);
    expect(endState.currentValue).toBe(3); // Текущее значение должно сброситься до нового minValue
});

// Тест инкремента
test('increment currentValue', () => {
    let intermediateState: CounterState = counterReducer(startState, incrementAC());
    expect(intermediateState.currentValue).toBe(1); // Должно увеличиться на 1

    // Установим текущее значение на максимальное и проверим, что инкремент не превышает его
    intermediateState.currentValue = 5;
    const endState = counterReducer(intermediateState, incrementAC());
    expect(endState.currentValue).toBe(5); // Значение не должно увеличиваться выше 5
});

// Тест на сброс
test('reset currentValue', () => {
    let intermediateState: CounterState = { ...startState, currentValue: 3 }; // Установим значение текущего счетчика
    const endState = counterReducer(intermediateState, resetAC());
    
    expect(endState.currentValue).toBe(startState.minValue); // Должно сброситься до minValue
});

// Тест на загрузку значений
test('load values', () => {
    const action = loadValuesAC({ maxValue: 15, minValue: 5, currentValue: 5 });
    const endState = counterReducer(startState, action);
    
    expect(endState.maxValue).toBe(15);
    expect(endState.minValue).toBe(5);
    expect(endState.currentValue).toBe(5); // Проверяем, что currentValue соответствует новому minValue
});
