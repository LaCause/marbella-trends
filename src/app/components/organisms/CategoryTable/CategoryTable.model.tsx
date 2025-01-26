"use client";
import { Category } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export const CATEGORY_TABLE_COLUMNS: ColumnDef<Category>[] = [
  {
    accessorKey: "id",
    header: () => <div className="text-left">ID</div>,
    cell: ({ row }) => (
      <div className="text-left font-medium">{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: () => <div className="text-left">Name</div>,
    cell: ({ row }) => (
      <div className="text-left font-medium">{row.getValue("name")}</div>
    ),
  },
];
