import React from 'react';
import classNames from 'classnames';

export default function Button({ className, children, onClick, outline }) {
  return (
    <button
      onClick={onClick}
      // className={`button ${this.props.outline ? 'button--outline' : ''}`}
      className={classNames('button', {
        // библ-ка проверяет пропс outline == true? и только в этом случае добавляет второй класс
        'button--cart': className,
        'button-outline': outline,
      })}
    >
      {children}
    </button>
  );
}
