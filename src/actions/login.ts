"use server";

import {LoginFormDataTypes} from "@/types/auth";
import {emailRegex} from "@/lib/auth-utils";

export async function login(
    prevState: LoginFormDataTypes,
    formData: FormData,
): Promise<LoginFormDataTypes> {
    const email = formData.get("email");
    const password = formData.get("password");

    const trimmedEmail: string = String(email)?.trim()?.toLowerCase();
    const trimPassword: string = String(password)?.trim();

    const newErrors = {
        email: trimmedEmail ? "" : "enter email",
        password: trimPassword === "" ? "enter password"
            : trimPassword.length < 6 ? "password must be at least 6 characters"
                : "",
    }

    if (newErrors.email || newErrors.password) {
        return {
            success: false,
            emailError: newErrors.email,
            passwordError: newErrors.password,
            fields: {
                email: prevState.fields.email,
                password: prevState.fields.password,
                remember: prevState.fields.remember,
            }
        };
    }

    if (!emailRegex.test(trimmedEmail)) {
        return {
            success: false,
            emailError: "email format is invalid",
            fields: {
                email: prevState.fields.email,
                password: prevState.fields.password,
                remember: prevState.fields.remember,
            }
        }
    }

    return {
        success: true,
        fields: {
            email: "",
            password: "",
            remember: false,
        }
    }
}