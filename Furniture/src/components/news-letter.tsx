import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { icons } from "./icons";
import { Spinner } from "@/components/ui/spinner";

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

export default function NewsLetterForm() {
  const [load, setLoad] = useState(false);
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(value: z.infer<typeof emailSchema>) {
    console.log(value);
    setLoad(true);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-full pr-8 lg:pr-0"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative space-y-0">
              <FormLabel className="sr-only">Email</FormLabel>

              <FormControl>
                <Input
                  placeholder="furniture@gmail.com"
                  {...field}
                  className="pr-12"
                />
              </FormControl>
              <FormMessage />

              <Button
                size="icon"
                className="absolute top-[4px] right-[3.5px] size-7 z-20"
              >
                {load ? (
                  <Spinner className="size-3" aria-hidden="true" />
                ) : (
                  <icons.paperPlane className="size-3" aria-hidden="true" />
                )}
              </Button>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
