
"use client";
import { authClient } from "@/lib/auth-client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Link from "next/link";
import { GrGoogle } from "react-icons/gr";
const LoginPage = () => {
  const googleHandle = async () => {
  await authClient.signIn.social({
    provider: "google",
  });
};
    const onSubmit = async(e) => {
    e.preventDefault();
     const formData = new FormData(e.currentTarget);
   const userData = Object.fromEntries(formData.entries());
   const { data, error } = await authClient.signIn.email({
    email: userData.email, 
    password: userData.password,
    callbackURL: "/",
});
  console.log(data, error)
    };
    return (
       <div className="mx-auto mt-10 bg-white p-4  shadow border rounded-sm">
        
        <h2 className="text-center text-4xl font-bold p-4">SigIn</h2>
        <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="john@example.com" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Button type="submit">
          <Check />
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
    <p className="text-center">or</p>
    <Button onClick={googleHandle} variant="outline" className={'w-full mt-2'}><GrGoogle></GrGoogle> Sign In with Google</Button>
    <Link href={'/sinup'}><p  className="text-center  mt-2 text-blue-500">Regestion Now</p></Link>
       </div>
    );
};

export default LoginPage;