import React from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';
import FocusTrap from 'focus-trap-react';
import styles from './styles.module.css';

function Dialog({ children, onClose }) {
  const container = document.getElementById('dialog-container');

  return (
    <Portal node={container}>
      <FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true }} containerElements={[container]}>
        <div className={styles.dialog}>
          <button className={styles.close} onClick={onClose} data-testid="close"></button>
          <div className={styles.body}>
            {children}
          </div>
        </div>
      </FocusTrap>
    </Portal>
  );
}

Dialog.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Dialog;