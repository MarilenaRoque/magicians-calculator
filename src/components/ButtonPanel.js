import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel(props) {
  const { clickHandler } = props;
  const buttonNames = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'X'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];
  const orangeButtons = ['÷', 'X', '-', '+', '='];
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
                      <Button key={countButton} name={name} clickHandler={clickHandler} color={orangeButtons.includes(name) ? '#F5913E' : null }/>
                    );
                  })}
                </div>
              );
            })
        }
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
