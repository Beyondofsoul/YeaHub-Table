import { Header } from '@/widgets/header';
import { SpecializationsFilters, SpecializationsList } from '@/widgets/specializations';

function Specializations() {
  return (
    <>
      <Header />
      <SpecializationsFilters />
      <SpecializationsList />
    </>
  );
}

export default Specializations;
