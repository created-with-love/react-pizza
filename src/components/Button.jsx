import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function Button({ className, children, onClick, outline }) {
  return (
    <button
      onClick={onClick}
      // className={`button ${this.props.outline ? 'button--outline' : ''}`}
      className={classNames('button', className, {
        // библ-ка проверяет пропс outline == true? и только в этом случае добавляет второй класс
        'button-outline': outline,
      })}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
