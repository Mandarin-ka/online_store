import React from 'react';

function Button({
  className,
  onClick,
  children,
  style,
}: {
  className: string;
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <button
      className={className}
      onClick={
        onClick
          ? () => onClick()
          : () => {
              return;
            }
      }
      style={style}>
      {children}
    </button>
  );
}

export default Button;
