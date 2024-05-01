'use server';

import * as auth from "@/auth";

export async function SignIn() {
    return auth.signIn();
}

export async function SignOut() {
    return auth.signOut();
}