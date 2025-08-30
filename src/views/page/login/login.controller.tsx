import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { LoginSchema, type ILoginSchema } from "./login.schema";

export const useLoginController = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: ILoginSchema) => {
    try {
      await authClient.signIn.email({
        email: data.email,
        password: data.password,
      });
      toast("Login successful");
    } catch (error) {
      console.log("onSubmit login: ", error);
      toast((error as Error).message);
    }
  };

  return { register, onSubmit: handleSubmit(onSubmit), errors };
};
