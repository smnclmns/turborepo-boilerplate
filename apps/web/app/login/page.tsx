import { login } from './actions'
import { LoginForm } from "@repo/ui/components/login-form"

export default function LoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <LoginForm formAction={login} imageSrc='/promo-A.png' imageAlt='OnePiece gruplar promo'/>
      </div>
    </div>
  )
}