import React from 'react';
import NextLink from 'next/link';

/**
 * @param {{children?:React.ReactNode}&React.HTMLAttributes<HTMLAnchorElement>&import("next/link").LinkProps} props
 */

const Link = ({
  children,
  href,
  replace,
  passHref,
  scroll,
  shallow,
  prefetch,
  locale,
   ,
  as,
  ...props
}) => {
  const linkProps = {
    href,
    replace,
    passHref,
    scroll,
    shallow,
    prefetch,
    locale,
     ,
    as,
};
return (
  <NextLink {...linkProps} href={href}>
    {children}
  </NextLink>
);
};

export default Link;
