import { LocationForm } from "@/app/components/organisms/LocationForm/LocationForm";
import { LocationTable } from "@/app/components/organisms/LocationTable/LocationTable";

export default function Locations() {
  return (
    <section className="mx-4">
      <LocationForm />
      <LocationTable />
    </section>
  );
}
