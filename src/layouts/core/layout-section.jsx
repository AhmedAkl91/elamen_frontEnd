'use client';

import Box from '@mui/material/Box';

import { layoutClasses } from '../classes';

// ----------------------------------------------------------------------

export function LayoutSection({
  sx,
  cssVars,
  children,
  footerSection,
  headerSection,
  sidebarSection,
}) {
  return (
    <Box id="root__layout" className={layoutClasses.root} sx={sx}>
      {sidebarSection ? (
        <>
          {sidebarSection}
          <Box
            display="flex"
            flex="1 1 auto"
            flexDirection="column"
            className={layoutClasses.hasSidebar}
          >
            {headerSection}
            {children}
            {footerSection}
          </Box>
        </>
      ) : (
        <>
          {headerSection}
          {children}
          {footerSection}
        </>
      )}
    </Box>
  );
}
