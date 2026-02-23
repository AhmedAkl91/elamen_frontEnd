import { Toaster } from 'sonner';

import { styled } from '@mui/material/styles';

import { varAlpha } from 'src/theme/styles';

import { toasterClasses } from './classes';

// ----------------------------------------------------------------------

export const StyledToaster = styled(Toaster)(({ theme }) => {
  const shadow = theme.customShadows.z8;

  const baseToast = {
    width: '100%',
    minHeight: 52,
    display: 'flex',
    gap: 12,
    borderRadius: 12,
    alignItems: 'center',
  };

  const defaultToast = {
    padding: theme.spacing(1, 1, 1, 1.5),
    color: theme.vars.palette.background.paper,
    backgroundColor: theme.vars.palette.text.primary,
    boxShadow: shadow,
  };

  const coloredToast = {
    padding: theme.spacing(0.5, 1, 0.5, 0.5),
    color: theme.vars.palette.text.primary,
    backgroundColor: theme.vars.palette.background.paper,
    boxShadow: shadow,
  };

  const loaderWrapper = {
    inset: 0,
    display: 'none',
    position: 'absolute',
    borderRadius: 'inherit',
    alignItems: 'center',
    justifyContent: 'center',
    background: theme.vars.palette.background.neutral,

    [`& .${toasterClasses.loadingIcon}`]: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      animation: 'rotate 3s linear infinite',
      background: `conic-gradient(
        ${varAlpha(theme.vars.palette.text.primaryChannel, 0)},
        ${varAlpha(theme.vars.palette.text.disabledChannel, 0.64)}
      )`,
    },

    [toasterClasses.loaderVisible]: {
      display: 'flex',
    },
  };

  const variantIcon = (color, channel) => ({
    color,
    backgroundColor: varAlpha(channel, 0.08),
  });

  return {
    width: 300,
    maxWidth: '100%',

    /* Keyframes */
    '@keyframes rotate': {
      to: { transform: 'rotate(1turn)' },
    },

    /* Toast */
    [`& .${toasterClasses.toast}`]: baseToast,

    /* Content */
    [`& .${toasterClasses.content}`]: {
      flex: '1 1 auto',
    },
    [`& .${toasterClasses.title}`]: {
      fontSize: theme.typography.subtitle2.fontSize,
    },
    [`& .${toasterClasses.description}`]: {
      ...theme.typography.caption,
      opacity: 0.64,
    },

    /* Close button */
    [`& .${toasterClasses.closeButton}`]: {
      top: 0,
      left: 0,
      // transform: 'translate(-6px, 6px)',
      color: 'currentColor',
      backgroundColor: 'transparent',
      borderColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.16),
      transition: theme.transitions.create(['background-color', 'border-color']),
      '&:hover': {
        borderColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.24),
        backgroundColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
      },
    },

    /* Icon */
    [`& .${toasterClasses.icon}`]: {
      width: 48,
      height: 48,
      margin: 0,
      alignSelf: 'flex-start',
      borderRadius: 'inherit',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      [`& .${toasterClasses.iconSvg}`]: {
        width: 24,
        height: 24,
        fontSize: 0,
      },
    },

    /* Default */
    [`& .${toasterClasses.default}`]: {
      ...defaultToast,

      [`&:has(${toasterClasses.closeBtnVisible}) .${toasterClasses.content}`]: {
        paddingRight: 32,
      },

      [`&:has(.${toasterClasses.loader})`]: {
        padding: theme.spacing(0.5),
      },

      [`& .${toasterClasses.loader}`]: loaderWrapper,
    },

    /* Variants */
    [`& .${toasterClasses.error}`]: {
      ...coloredToast,
      [`& .${toasterClasses.icon}`]: variantIcon(
        theme.vars.palette.error.main,
        theme.vars.palette.error.mainChannel
      ),
    },

    [`& .${toasterClasses.success}`]: {
      ...coloredToast,
      [`& .${toasterClasses.icon}`]: variantIcon(
        theme.vars.palette.success.main,
        theme.vars.palette.success.mainChannel
      ),
    },

    [`& .${toasterClasses.warning}`]: {
      ...coloredToast,
      [`& .${toasterClasses.icon}`]: variantIcon(
        theme.vars.palette.warning.main,
        theme.vars.palette.warning.mainChannel
      ),
    },

    [`& .${toasterClasses.info}`]: {
      ...coloredToast,
      [`& .${toasterClasses.icon}`]: variantIcon(
        theme.vars.palette.info.main,
        theme.vars.palette.info.mainChannel
      ),
    },
  };
});
