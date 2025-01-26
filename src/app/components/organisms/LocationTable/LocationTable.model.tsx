import { Location } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export interface LocationFormTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export const LOCATION_TABLE_COLUMNS: ColumnDef<Location>[] = [
  {
    accessorKey: "id",
    header: () => <div className="text-left">ID</div>,
    cell: ({ row }) => <div className="text-left">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "company",
    header: "Nom ",
    cell: ({ row }) => (
      <div className="text-left">{row.getValue("company")}</div>
    ),
  },
];
