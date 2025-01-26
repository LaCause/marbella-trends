import { FilterPanel } from "./components/organisms/FilterPanel/FilterPanel";
import { getLocationsAction } from "./actions/location";
import { CardGrid } from "./components/organisms/CardGrid/CardGrid";
import { Suspense } from "react";
import { Title } from "./components/atoms/Title/Title";
import { Button } from "@/components/ui/button";

const AsyncCardGrid = async () => {
  const locations = await getLocationsAction();
  return <CardGrid className="mx-4" locations={locations} />;
};

export default async function Home() {
  return (
    <section className="h-[40rem]">
      <div className="flex-row sm:flex sm:gap-4 mx-4">
        <div className="flex flex-col justify-center gap-6 sm:w-2/3">
          <span className="text-xs">
            Marbella, Puerto Banus sur la Costa del Sol
          </span>
          <Title
            title="Marbella, Espagne – Plages de Rêve, Clubs Branchés et Hôtels de Luxe"
            heading="h1"
          />
          <p className="text-md">
            Découvrez Marbella, Espagne : ses plages paradisiaques, ses clubs
            exclusifs et ses hôtels de luxe. Profitez des activités tendances et
            des soirées inoubliables sur la Costa del Sol. Préparez votre séjour
            dès maintenant !
          </p>
          <div>
            <Button variant={"outline"} children="Voir les activités" />
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
      <FilterPanel className="mx-4" />
      <Suspense fallback={<div>Loading</div>}>
        <AsyncCardGrid />
      </Suspense>
    </section>
  );
}
