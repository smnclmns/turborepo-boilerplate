import { cn } from "@repo/ui/lib/utils"
import { Button } from "@repo/ui/components/button"
import { Card, CardContent } from "@repo/ui/components/card"
import { Input } from "@repo/ui/components/input"
import { Label } from "@repo/ui/components/label"

type LoginAction = (formData: FormData) => Promise<void> | void;

type LoginFormProps = React.ComponentProps<"div"> & {
  /** server action coming from the app layer */
  formAction?: LoginAction;
  /** optional image customisation */
  imageSrc?: string;
  imageAlt?: string;
};

export function LoginForm({
  className,
  formAction,
  imageSrc = "/placeholder.svg", // default keeps today’s behaviour
  imageAlt = "Image",
  ...props
}: LoginFormProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form action={formAction} className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome back 🐣</h1>
                <p className="text-muted-foreground text-balance">
                  Login with your Chao or TMM account
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Chao_member@chao.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <Input id="password" type="password" name="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </form>
          <div className="bg-muted relative hidden md:block">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
