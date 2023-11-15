"use client"

import React, { useState } from 'react';
import styles  from './styles.module.css'
import { useRouter } from 'next/navigation'
import { v4 as uuid } from 'uuid';
import classNames from 'classnames';

function ContextMenu({ actions = [], id = '' }) {
  const [ opened, setOpened] = useState(false);
  const routeMap = new Map([
    ['edit', `${id}/edit`],
    [ 'delete', '']
  ]);
  const router = useRouter();

  const toggle = (e) => {
    e.stopPropagation();
    
    setOpened(!opened);
  }

  const handleAction = (e, action) => {
    e.stopPropagation();
    
    router.push(routeMap.get(action));
    setOpened(false);
  };

  return (
    <div className={classNames(styles.menu, opened ? styles.opened : '')}>
      <button className={styles.button} onClick={toggle}></button>
      {opened && (
        <ul className={styles.actions}>
          {actions.map((action) => (<li className={styles.action} key={uuid()} onClick={(event) => handleAction(event, action)}>{action}</li>))}
        </ul>
      )}
    </div>
  );
}

export default ContextMenu;