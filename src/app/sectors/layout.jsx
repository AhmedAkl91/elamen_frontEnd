// import { MainLayout } from 'src/layouts/main';

import { InnerLayout } from "src/layouts/main/inner-layout";

// ----------------------------------------------------------------------
export default function Layout({ children }) {
  return <InnerLayout>{children}</InnerLayout>;
}
