import React from 'react';
import Button from './Button';

function ButtonPanel() {
  const buttonNames = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];
  let countButton = 0;
  let countGroup = 0;
  return (
    <div className="Panel">
      {
            buttonNames.map(group => {
              countGroup += 1;
              return (
                <div className="group" key={countGroup}>
                  {group.map(name => {
                    countButton += 1;
                    return (
                      <Button key={countButton} name={name} />
                    );
                  })}
                </div>
              );
            })
        }
    </div>
  );
}

export default ButtonPanel;
