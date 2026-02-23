import { useState } from 'react';

const VisibilityCountUp = ({ count = 0 }) => {
  const [countStart, setCountStart] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCountStart(true);
    }
  };
};

export default VisibilityCountUp;
