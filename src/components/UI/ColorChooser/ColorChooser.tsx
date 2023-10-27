import  React, { useState } from 'react';
import cl from './ColorChooser.module.css'
import { getColors } from '../../../utils/FlowersUtils';

function ColorChooser({colors}: {colors: string[]}) {
  const [color, setColor] = useState(colors[0]);
  const [isActive, setIsActive] = useState(false);
  const colorsRu = {
    darkred: `Красный`,
    blue: `Синий`,
    pink: `Розовый`,
    white: `Белый`,
    yellow: `Жёлтый`,
    orange: `Оранжевый`,
    indigo: `Индиго`,
    lime: `Зелёный`,
    black: `Чёрный`,
  }

  return (
    <div className={cl.color__block}>
      <span className={cl.color__name}>{colorsRu[color as keyof typeof colorsRu]}</span>
      <div className={cl.current__color} style={color!=='white' ? {background: color} :{background: color, border: `1px solid #BDBDBD`}}></div>
      <div className={isActive ? cl.colors + ' ' + cl.active : cl.colors}  onClick={() => setIsActive(false)}>
        {colors.map((e,i)=>
          <div
            key={i}
            className={cl.color}
            style={e!=='white' ? {background: e} :{background: e, border: `1px solid #BDBDBD`}}
            onClick={() => {
              setColor(e)
              setIsActive(false)}}>
          </div>
          )}

      </div>
      <span className={cl.color_name} onClick={() => setIsActive(!isActive)}>Изменить</span>
    </div>
   );
}

export default ColorChooser;