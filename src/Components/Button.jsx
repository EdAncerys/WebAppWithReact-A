import React, { useState } from 'react';
import colors from '../config/colors';

export default function Button({ title }) {
  const [hover, setHover] = useState(false);
  const btnColor = hover ? colors.medium : colors.secondary;

  return (
    <div>
      <div
        style={{
          color: colors.white,
          cursor: 'pointer',
          backgroundColor: btnColor,
          border: `1px solid ${btnColor}`,
          borderRadius: 5,
          padding: 5,
        }}
        onMouseOver={() => setHover(!hover)}
        onMouseLeave={() => setHover(!hover)}
      >
        {title}
      </div>
    </div>
  );
}
