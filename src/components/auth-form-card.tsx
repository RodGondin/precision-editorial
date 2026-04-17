import type { ReactNode, FormEventHandler } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type AuthFormCardProps = {
  title: string;
  description: string;
  formId: string;
  submitLabel: string;
  submitDisabled?: boolean;
  children: ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  footer?: ReactNode;
  cardClassName?: string;
  headerClassName?: string;
  contentClassName?: string;
  formClassName?: string;
  footerClassName?: string;
  submitButtonClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function AuthFormCard({
  title,
  description,
  formId,
  submitLabel,
  submitDisabled = false,
  children,
  onSubmit,
  footer,
  cardClassName,
  headerClassName,
  contentClassName,
  formClassName,
  footerClassName,
  submitButtonClassName,
  titleClassName,
  descriptionClassName,
}: AuthFormCardProps) {
  return (
    <Card className={cn("w-full max-w-[552px] p-12", cardClassName)}>
      <CardHeader className={cn("pb-8", headerClassName)}>
        <CardTitle className={cn("text-4xl font-extrabold text-(--title-black)", titleClassName)}>
          {title}
        </CardTitle>
        <CardDescription className={cn("text-(--secondary-dark)", descriptionClassName)}>
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className={contentClassName}>
        <form id={formId} onSubmit={onSubmit} className={cn("space-y-6", formClassName)}>
          {children}
        </form>
      </CardContent>

      <CardFooter className={cn("flex-col gap-6", footerClassName)}>
        <Button
          type="submit"
          form={formId}
          disabled={submitDisabled}
          className={cn(
            "h-14 w-full cursor-pointer transition-colors hover:bg-(--primary-hover)",
            submitButtonClassName
          )}
        >
          {submitLabel}
        </Button>
        {footer}
      </CardFooter>
    </Card>
  );
}
