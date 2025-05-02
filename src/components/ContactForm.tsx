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
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Card, CardContent } from "./ui/card";
import { Textarea } from "./ui/textarea";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    if (!formRef.current) return;
    console.log(data);

    try {
      if (formRef.current) {
        setLoading(true);
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID as string,
          formRef.current,
          process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY,
        );
        form.reset();
        toast("Your message has been sent.");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="mx-auto w-full max-w-3xl shadow-md md:px-2 md:py-10">
      <CardContent>
        <Form {...form}>
          <form
            ref={formRef}
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 bg-white font-sans"
          >
            <div className="flex flex-col items-center max-md:space-y-8 md:flex-row md:gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        className="py-6 text-sm"
                        placeholder="Your Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        className="py-6 text-sm"
                        placeholder="Work Email"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-36 text-sm"
                      placeholder="Your Message"
                      rows={4}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              size="lg"
              disabled={loading}
              type="submit"
              className="h-12 w-40 cursor-pointer bg-[#fb5607] font-sans lg:h-14"
            >
              {loading ? "Sending" : "Send Message"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
