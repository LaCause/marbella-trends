"use client";

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
import { zodResolver } from "@hookform/resolvers/zod";
import { Location } from "@prisma/client";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const LocationForm = () => {
  const schema = z.object({
    company: z.string().email("Invalid email"),
  });

  const form = useForm<Location>({
    resolver: zodResolver(schema),
  });

  const handleAddLocation = async (data: Location) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-2"
        onSubmit={form.handleSubmit(handleAddLocation)}
      >
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Ajouter un lieu</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Nom du lieu" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <>
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Ajouter une description"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <div className="flex">
          <FormField
            control={form.control}
            name="long"
            render={({ field }) => (
              <>
                <FormItem className="flex-1">
                  <FormControl>
                    <Input type="number" placeholder="Longitude" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <FormField
            control={form.control}
            name="lat"
            render={({ field }) => (
              <>
                <FormItem className="flex-1">
                  <FormControl>
                    <Input type="number" placeholder="Latitude" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="line"
          render={({ field }) => (
            <>
              <FormItem>
                <FormControl>
                  <Input type="text" placeholder="Adresse du lieu" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <FormField
          control={form.control}
          name="trends_value"
          render={({ field }) => (
            <>
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Valeur de tendance"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <Button type="submit" className="w-full">
          Ajouter
        </Button>
      </form>
    </Form>
  );
};
