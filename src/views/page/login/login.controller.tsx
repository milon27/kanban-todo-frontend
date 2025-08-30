import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginSchema, type ILoginSchema } from "./login.schema";
export const useLoginController = () => {
  // setup hook form
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

  const onSubmit = (data: ILoginSchema) => {
    console.log(data);
  };

  return { register, onSubmit: handleSubmit(onSubmit), errors };
};
