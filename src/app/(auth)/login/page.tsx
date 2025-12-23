"use client";

import {
    useEffect,
    useState,
    useRef,
    useActionState,
    startTransition,
    type ChangeEvent,
    type FormEvent
} from "react";

import useSetClientTitle from "@/hooks/useSetClientTitle";
import FormButton from "@/components/button/FormButton";
import CheckBox from "@/components/forms/CheckBox";
import useAlertModal from "@/hooks/useAlertModal";
import {LoginFormDataTypes} from "@/types/auth";
import Input from "@/components/forms/Input";
import {emailRegex} from "@/lib/auth-utils";
import {useRouter} from "next/navigation";
import useToggle from "@/hooks/useToggle";
import {login} from "@/actions/login";

const initValue: LoginFormDataTypes = {
    success: false,
    emailError: "",
    passwordError: "",
    fields: {
        email: "",
        password: "",
        remember: false
    }
}

export default function Login() {
    const [state, formAction] = useActionState(login, initValue);
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });

    const {
        toggle: showPassword,
        handleToggle: setShowPassword
    } = useToggle();

    const {
        AlertModalComponent,
        changeAlertModalData
    } = useAlertModal({
        initAlertType: "success",
        initMessage: "logged in successfully",
    });

    // ref
    const inputRef = useRef<HTMLInputElement>(null);

    const router = useRouter();

    // set title
    useSetClientTitle("login");

    // focus
    useEffect(() => {
        inputRef?.current?.focus();
    }, []);

    // set email handler
    function setEmailHandler(event: ChangeEvent<HTMLInputElement>) {
        const val: string = event.target.value;

        setEmail(val);

        if (
            errors.email.includes("format")
            && emailRegex.test(val.trim())
        ) {
            setErrors({
                ...errors,
                email: ""
            });
        }

        if (
            errors.email.includes("enter")
            && val.trim()
        ) {
            setErrors({
                ...errors,
                email: ""
            });
        }
    }

    // set password handler
    function setPasswordHandler(event: ChangeEvent<HTMLInputElement>) {
        const val: string = event.target.value;

        setPassword(val);

        if (
            val.trim()
            && errors.password
        ) {
            setErrors({
                ...errors,
                password: ""
            });
        }

        if (
            val.trim().length > 6
            && errors.password.includes("6")
        ) {
            setErrors({
                ...errors,
                password: ""
            });
        }
    }

    function submitHandler(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();


        const trimmedEmail: string = email?.trim()?.toLowerCase();
        const trimPassword: string = password?.trim();

        const newErrors = {
            email: trimmedEmail ? "" : "enter email",
            password: trimPassword ? "" : "enter password",
        }

        if (newErrors.email || newErrors.password) {
            setErrors(newErrors);
            return;
        }

        if (!emailRegex.test(trimmedEmail)) {
            setErrors({...newErrors, email: "email format is invalid"});
            return;
        }

        startTransition(() => {
            formAction(new FormData(event.currentTarget));
        });
    }

    useEffect(() => {
        (() => {
            if (state.success) {
                changeAlertModalData({
                    isOpen: true,
                });

                setTimeout(() => {
                    router.replace("/");
                }, 4000);
            } else {
                if (state.emailError || state.passwordError) {
                    setErrors({
                        email: state.emailError ?? "",
                        password: state.passwordError ?? ""
                    });
                }
            }
        })();
        // eslint-disable-next-line
    }, [state]);

    return (
        <>
            <AlertModalComponent/>

            <section
                className="flex items-center justify-center min-h-screen"
            >
                <div
                    className="max-w-9/10 w-full xs:max-w-sm sm:max-w-md bg-white/10 rounded-2xl shadow-lg space-y-6 p-3 xs:p-8"
                >
                    <h2
                        className="text-2xl font-bold text-center"
                    >
                        dashboard
                    </h2>
                    <p
                        className="text-sm text-center text-secondary-txt"
                    >
                        login to admin dashboard
                    </p>

                    <form
                        onSubmit={submitHandler}
                        className="space-y-6"
                    >
                        <Input
                            value={email}
                            dir={"ltr"}
                            id={"email"}
                            as={"input"}
                            name={"email"}
                            label={"email"}
                            inputType={"text"}
                            inputRef={inputRef}
                            autoComplete={"email"}
                            hasError={
                                errors.email
                            }
                            placeholder={"you@example.com"}
                            onChangeInput={setEmailHandler}
                        />

                        <Input
                            value={password}
                            as={"input"}
                            id="password"
                            label={"password"}
                            name={"password"}
                            placeholder={"******"}
                            parentClassName={"relative"}
                            autoComplete={"current-password"}
                            inputType={
                                showPassword ? "text" : "password"
                            }
                            dir={"ltr"}
                            hasError={
                                errors.password
                            }
                            onChangeInput={setPasswordHandler}
                        >
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? "Hide Password" : "Show Password"}
                                className="absolute right-2 top-1/2 text-sm text-gray-500 hover:text-violet-500 cursor-pointer"
                            >
                                {showPassword ? "hide" : "show"}
                            </button>
                        </Input>

                        <div className="flex items-center justify-between text-sm text-gray-400">
                            <CheckBox
                                id={"remember"}
                                name={"remember"}
                                label={"remember me"}
                            />
                        </div>

                        <FormButton
                            disabled={state.success}
                            className={"w-full justify-center"}
                        >
                            login
                        </FormButton>
                    </form>
                </div>
            </section>
        </>
    );
};