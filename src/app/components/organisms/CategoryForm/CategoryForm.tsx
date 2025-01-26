"use client";

import { addCategory } from "@/app/actions/category";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Category } from "@prisma/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./CategoryForm.model";

export default function CategoryForm() {
  const form = useForm<Category>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
    },
  });
  const [loading, setLoading] = useState(false);

  const handleAddCategory = async (data: Category) => {
    setLoading(true);
    await addCategory(data);
    setLoading(false);
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-2"
        onSubmit={form.handleSubmit(handleAddCategory)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ajouter une catégorie</FormLabel>
              <FormControl>
                <Input placeholder="Nom de catégorie" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={loading}>
          Ajouter
        </Button>
      </form>
    </Form>
  );
}
