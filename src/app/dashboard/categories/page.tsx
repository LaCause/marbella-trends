import { getCategories } from "@/app/actions/category";
import CategoryForm from "@/app/components/organisms/CategoryForm/CategoryForm";
import { CategoryTable } from "@/app/components/organisms/CategoryTable/CategoryTable";
import { CATEGORY_TABLE_COLUMNS } from "@/app/components/organisms/CategoryTable/CategoryTable.model";
import { Separator } from "@/components/ui/separator";

const categories = await getCategories();

export default function Categories() {
  return (
    <section className="h-screen mx-4 flex flex-col gap-4">
      <CategoryForm />
      <Separator />
      <CategoryTable columns={CATEGORY_TABLE_COLUMNS} data={categories} />
    </section>
  );
}
