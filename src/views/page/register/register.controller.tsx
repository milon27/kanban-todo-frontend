import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { RegisterSchema, type IRegisterSchema } from "./register.schema";

export const useRegisterController = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterSchema>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: IRegisterSchema) => {
    try {
      await authClient.signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
      });
      toast("Registration successful");
    } catch (error) {
      console.log("onSubmit register-----------: ", error);
      toast((error as Error).message);
    }
  };

  return { register, onSubmit: handleSubmit(onSubmit), errors };
};
