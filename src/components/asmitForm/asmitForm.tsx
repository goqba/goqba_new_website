"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import Swal from "sweetalert2";

const formSchema = z.object({
  id: z.string().min(2, {
    message: "PatientID must be at least 2 characters.",
  }),
  amount: z.string().min(1).max(10, {
    message: "Semen amount must be maximum 10 characters.",
  }),
  age: z.string().min(1).max(3, {
    message: "Patient age must be maximum 3 characters.",
  }),
});

interface PatientFormProps {
  setIsFilled: (prev: any) => void;
  setUserData: (prev: any) => void;
}

export function PatientForm({ setIsFilled, setUserData }: PatientFormProps) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      amount: "",
      age: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(values)
    try {
      setUserData({
        id: values.id,
        age: values.age,
        amount: parseFloat(values.amount),
      });
      setIsFilled((prev: boolean) => !prev);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      console.error("Error:", error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Patient ID</FormLabel>
              <FormControl>
                <Input
                  className="text-black"
                  placeholder="Enter a patient ID"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Semen amount (M/mL)</FormLabel>
              <FormControl>
                <Input
                  className="text-black"
                  placeholder="Enter the semen amount in M/mL"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age</FormLabel>
              <FormControl>
                <Input
                  className="text-black"
                  placeholder="Enter a patient age"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button size={"lg"} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
