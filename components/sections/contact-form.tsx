"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useTranslation } from "@/lib/i18n/context";

const contactSchema = z.object({
  name: z.string().min(2, "يرجى كتابة الاسم / Name is required"),
  email: z
    .string()
    .email("يرجى إدخال بريد إلكتروني صالح / Valid email required"),
  company: z.string().optional(),
  service: z.string().min(1, "يرجى اختيار نطاق المشروع / Pick a service"),
  message: z
    .string()
    .min(10, "يرجى كتابة تفاصيل مبسطة / Please provide brief details"),
});

type ContactValues = z.infer<typeof contactSchema>;

const SERVICE_CHIPS_AR = [
  "إنتاج مرئي وسينمائي",
  "استراتيجية وهوية بصرية",
  "نمو رقمي وحملات ممولة",
  "أجنحة معارض وفعاليات",
  "موشن جرافيك و3D",
  "ذكاء اصطناعي وأتمتة",
  "تفعيل ميداني وروود شو",
  "مشروع متكامل شامل",
];

const SERVICE_CHIPS_EN = [
  "Visual Production & Films",
  "Strategy & Brand Identity",
  "Digital Growth & Paid Ads",
  "Exhibitions & Event Booths",
  "Motion Graphics & 3D",
  "AI & Marketing Automation",
  "Field Activation & Roadshows",
  "Turnkey Integrated Solution",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const { t, lang } = useTranslation();

  const services = lang === "ar" ? SERVICE_CHIPS_AR : SERVICE_CHIPS_EN;

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { service: services[0] },
  });

  const selectedService = useWatch({ control, name: "service" });

  const onSubmit = async (values: ContactValues) => {
    // Simulated smooth submission
    await new Promise((r) => setTimeout(r, 1000));
    console.info("[contact] message:", values);
    setSent(true);
  };

  return (
    <div aria-live="polite">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex min-h-96 flex-col items-start justify-center"
          >
            <span className="flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Check className="size-6" />
            </span>
            <h2 className="mt-8 font-display text-4xl">
              {lang === "ar" ? "تم استلام طلبك بنجاح" : "Message received"}
              <span className="text-accent">.</span>
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
              {t("contact.form.success")}
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-10"
          >
            <div className="grid gap-10 sm:grid-cols-2">
              <div className="space-y-3">
                <Label htmlFor="name">{t("contact.form.name")} *</Label>
                <Input
                  id="name"
                  placeholder={t("contact.form.namePlaceholder")}
                  aria-invalid={!!errors.name}
                  {...register("name")}
                />
                {errors.name && (
                  <p role="alert" className="text-sm text-destructive">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="space-y-3">
                <Label htmlFor="email">{t("contact.form.email")} *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("contact.form.emailPlaceholder")}
                  aria-invalid={!!errors.email}
                  {...register("email")}
                />
                {errors.email && (
                  <p role="alert" className="text-sm text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <fieldset>
              <legend className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {t("contact.form.service")} *
              </legend>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {services.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() =>
                      setValue("service", item, { shouldValidate: true })
                    }
                    aria-pressed={selectedService === item}
                    data-cursor="hover"
                    className={
                      selectedService === item
                        ? "rounded-full border border-accent bg-accent px-4 py-2 text-xs font-medium text-accent-foreground shadow-sm"
                        : "rounded-full border border-border bg-surface-2/40 px-4 py-2 text-xs text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground"
                    }
                  >
                    {item}
                  </button>
                ))}
              </div>
              {errors.service && (
                <p role="alert" className="mt-3 text-sm text-destructive">
                  {errors.service.message}
                </p>
              )}
            </fieldset>

            <div className="space-y-3">
              <Label htmlFor="message">{t("contact.form.message")} *</Label>
              <Textarea
                id="message"
                placeholder={t("contact.form.messagePlaceholder")}
                aria-invalid={!!errors.message}
                {...register("message")}
                rows={4}
              />
              {errors.message && (
                <p role="alert" className="text-sm text-destructive">
                  {errors.message.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              data-cursor="hover"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" />{" "}
                  {t("contact.form.sending")}
                </>
              ) : (
                t("contact.form.submit")
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
