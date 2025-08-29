import { login } from "@lib/data/customer"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import Input from "@modules/common/components/input"
import { useActionState } from "react"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(login, null)

  return (
    <div
      className="max-w-sm w-full flex flex-col items-center"
      data-testid="login-page"
    >
      <h1 className="text-large-semi uppercase mb-6">Добро пожаловать</h1>
      <p className="text-center text-base-regular text-ui-fg-base mb-8">
        Войдите, чтобы получить расширенные возможности покупок.
      </p>
      <form className="w-full" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Электронная почта"
            name="email"
            type="email"
            title="Введите действительный адрес электронной почты."
            autoComplete="email"
            required
            data-testid="email-input"
          />
          <Input
            label="Пароль"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            data-testid="password-input"
          />
        </div>
        <ErrorMessage error={message} data-testid="login-error-message" />
        <SubmitButton data-testid="sign-in-button" className="w-full mt-6">
          Войти
        </SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        Ещё не с нами?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="underline"
          data-testid="register-button"
        >
          Присоединяйтесь
        </button>
        .
      </span>
    </div>
  )
}

export default Login
