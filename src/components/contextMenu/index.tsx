import { To, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import classNames from 'classnames';
import { useState, MouseEvent } from 'react';

import styles  from './styles.module.css'

type ContextMenu = {
  actions: string[];
  id: string;
}

export default function ContextMenu({ actions = [], id = '' }: ContextMenu) {
  const [ opened, setOpened] = useState(false);
  const routeMap = new Map<string, string>([
    ['edit', `${id}/edit`],
    [ 'delete', '']
  ]);
  const navigate = useNavigate();

  const toggle = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    
    setOpened(!opened);
  }

  const handleAction = (e: MouseEvent<HTMLLIElement>, action: string) => {
    e.stopPropagation();
    
    navigate(routeMap.get(action) as To);
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
