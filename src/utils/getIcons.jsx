import { forwardRef } from 'react';

import { Box } from '@mui/material';
import Icon from '@mui/material/Icon';
import { styled } from '@mui/material/styles';

export const FuseSvgIcon = forwardRef((props, ref) => {

  const Root = styled(Box)(({ theme, ...props }) => ({
    width: props.size,
    height: props.size,
    minWidth: props.size,
    minHeight: props.size,
    fontSize: props.size,
    lineHeight: props.size,
    color: {
      primary: theme.palette.primary.main,
      secondary: theme.palette.secondary.main,
      info: theme.palette.info.main,
      success: theme.palette.success.main,
      warning: theme.palette.warning.main,
      action: theme.palette.action.active,
      error: theme.palette.error.main,
      disabled: theme.palette.action.disabled,
      inherit: undefined,
    }[props.color],
  }));
  if (!props.children.includes(':')) {
    return <Icon ref={ref} {...props} />;
  }
  const iconPath = props.children.replace(':', '.svg#');
  return (
    <Root
      {...props}
      component="svg"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className="shrink-0 fill-current"
      ref={ref}
      sx={props.sx}
      size={props.size}
      color="#000"
    >
      <use xlinkHref={`/icons/${iconPath}`} />
    </Root>
  );
});
