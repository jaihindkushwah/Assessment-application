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
import { Input, InputProps } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { Textarea } from "@/components/ui/textarea";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string(),
  email: z.string(),
  phoneNo: z.string(),
  message: z.string(),
});

const CustomPhoneInput = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <Input
      className={cn(
        "rounded-e-lg rounded-s-none dark:bg-white dark:text-black text-[12px]",
        className
      )}
      {...props}
      ref={ref}
    />
  )
);
CustomPhoneInput.displayName = "CustomPhoneInput";
function ContactForm() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNo: "",
      message: "",
    },
  });
  const customToast = (title: string) =>
    toast({
      className: " top-0 right-0 sm:max-w-[320px] w-full fixed z-50 mt-4",
      title: title,
      duration: 2000,
    });
  const validateForm = (data: z.infer<typeof FormSchema>) => {
    if (!data.name) {
      customToast("Please enter your name");
      return false;
    }
    if (
      data.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
    ) {
      customToast("Please enter a valid email address");
      return false;
    }
    if (!data.phoneNo) {
      customToast("Please enter your phone number");
      return false;
    }
    if (!data.message) {
      customToast("Please enter your message");
      return false;
    }
    return true;
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!validateForm(data)) return;
    console.log(data);
  }
  return (
    <main className="flex w-full flex-col items-center justify-start sm:justify-center">
      <div className=" flex items-center mt-5 flex-col md:w-[640px] w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex gap-4 flex-col "
          >
            <span className="flex flex-col sm:flex-row gap-4 ">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex-1 space-y-0.5">
                    <FormLabel className="text-[12px] font-normal">
                      First Name <span className={"text-red-500"}>*</span>{" "}
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="dark:bg-white dark:text-black text-[12px]"
                        placeholder="Enter Your First Name"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex-1 space-y-0.5">
                    <FormLabel className="text-[12px] font-normal">
                      Last Name<span className={"text-red-500"}>*</span>{" "}
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="dark:bg-white dark:text-black text-[12px]"
                        placeholder="Enter Your Last Name"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </span>
            <span className="flex flex-col sm:flex-row gap-4">
              <FormField
                control={form.control}
                name="phoneNo"
                render={({ field }) => (
                  <FormItem className="flex-1 space-y-0.5">
                    <FormLabel className="text-[12px] font-normal">
                      Contact Number <span className={"text-red-500"}>*</span>
                    </FormLabel>
                    <FormControl>
                      {/* <Input type="password" placeholder="Password" {...field} /> */}
                      <PhoneInput
                        defaultCountry="IN"
                        placeholder="Enter Your Phone Number "
                        inputComponent={CustomPhoneInput}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1 space-y-0.5">
                    <FormLabel className="text-[12px] font-normal">
                      Email Address <span className={"text-red-500"}>*</span>{" "}
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="dark:bg-white dark:text-black text-[12px]"
                        placeholder="Enter Your Email Id"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </span>
            <span className="flex flex-col sm:flex-row gap-4 ">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex-1 space-y-0.5">
                    <FormLabel className="text-[12px] font-normal">
                      Purpose <span className={"text-red-500"}>*</span>{" "}
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="dark:bg-white dark:text-black text-[12px]"
                        placeholder="Enter Your First Name"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex-1 space-y-0.5">
                    <FormLabel className="text-[12px] font-normal">
                      Organization
                      {/* <span className={"text-red-500"}>*</span>{" "} */}
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="dark:bg-white dark:text-black text-[12px]"
                        placeholder="Enter Your Last Name"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </span>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex-1 space-y-0.5">
                  <FormLabel className="text-[12px] font-normal">
                    Message <span className={"text-red-500"}>*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="dark:bg-white dark:text-black text-[12px]"
                      rows={3}
                      placeholder="Enter Your Message Here..."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex justify-center">
              <Button
                type="submit"
                className="w-full md:w-1/3 sm:w-1/2 text-[14px] font-normal hover:bg-slate-200 border text-black bg-white"
              >
                Submit your message
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </main>
  );
}

export default ContactForm;
