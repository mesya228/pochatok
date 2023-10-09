'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';

export const AuthGuard = (props) => {
  const { children } = props;
  const router = useRouter();
  const ignore = useRef(false);
  const [checked, setChecked] = useState(false);

  // Prevent from calling twice in development mode with React.StrictMode enabled
  if (ignore.current) {
    return;
  }

  ignore.current = true;
  if (!localStorage) {
    return null;
  }

  const token = localStorage?.getItem('userId');

  if (!token) {
    router.push('/auth');
  } else {
    setChecked(true);
  }

  if (!checked) {
    return null;
  }

  // If got here, it means that the redirect did not occur, and that tells us that the user is
  // authenticated / authorized.

  return children;
};

AuthGuard.propTypes = {
  children: PropTypes.node,
};
