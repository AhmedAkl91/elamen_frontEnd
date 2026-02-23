import { ServicesView } from 'src/sections/services/view/services-view';

export default function Page({ params }) {
  const { id } = params;
  return <ServicesView id={id} />;
}
