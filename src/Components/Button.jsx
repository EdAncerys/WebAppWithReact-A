import React, { useState } from 'react';
import colors from '../config/colors';

export default function Button({ title }) {
  const [hover, setHover] = useState(false);
  const btnColor = hover ? colors.black : colors.white;

  return (
    <div>
      <div
        style={{
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          color: btnColor,
          cursor: 'pointer',
          fontSize: 20,
          fontWeight: 500,
          borderRadius: 20,
          padding: 10,
          margin: 5,
          textTransform: 'uppercase',
        }}
        onMouseOver={() => setHover(!hover)}
        onMouseLeave={() => setHover(!hover)}
      >
        {title}
      </div>
    </div>
  );
}
