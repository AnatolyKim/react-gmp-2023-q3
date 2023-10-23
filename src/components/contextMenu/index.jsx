import React, { useState } from 'react';
import styles  from './styles.module.css'
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function ContextMenu({ actions = [], id = '' }) {
  const [ opened, setOpened] = useState(false);
  const routeMap = new Map([
    ['edit', `${id}/edit`],
    [ 'delete', '']
  ]);
  const navigate = useNavigate();

  const toggle = (e) => {
    e.stopPropagation();
    
    setOpened(!opened);
  }

  const handleAction = (e, action) => {
    e.stopPropagation();
    
    navigate(routeMap.get(action));
    setOpened(false);
  };

  return (
    <div className={`${styles.menu} ${opened ? styles.opened : ''}`}>
      <button className={styles.button} onClick={toggle}></button>
      {opened && (
        <ul className={styles.actions}>
          {actions.map((action) => (<li className={styles.action} key={uuidv4()} onClick={(event) => handleAction(event, action)}>{action}</li>))}
        </ul>
      )}
    </div>
  );
}

export default ContextMenu;