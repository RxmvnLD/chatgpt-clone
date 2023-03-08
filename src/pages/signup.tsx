import { useState } from "react";
import { SiOpenai } from "react-icons/si";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import axios, { AxiosError } from "axios";
import Link from "next/link";

type Inputs = {
  username: string;
  email: string;
  password: string;
};

const signup = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();
  const [error, setError] = useState<string>("");
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await axios.post("/api/auth/signup", data);
      console.log("server response", res);
      res.status === 201 &&
        alert("Account created successfully, please log in");
      router.push("/api/auth/signin");
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
        console.log(error.response?.data);
      }
    }
  };

  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen gap-3 text-white">
      <Link href="/">
        <SiOpenai className="mb-4 text-5xl" />
      </Link>
      <h1 className="text-xl font-semibold">Create your account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Username"
          {...register("username", { required: true })}
          className="px-3 py-1 rounded bg-gpt-light-gray"
        />
        {errors.username && (
          <span className="text-red-500">This field is required</span>
        )}
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
          })}
          className="px-3 py-1 rounded bg-gpt-light-gray"
        />
        {errors.email && (
          <span className="text-red-500">This field is required</span>
        )}
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
          className="px-3 py-1 rounded bg-gpt-light-gray"
        />
        {errors.password && (
          <span className="text-red-500">This field is required</span>
        )}
        <input
          type="submit"
          className="px-3 py-2 rounded cursor-pointer bg-gpt-green"
        />
      </form>
      <p className="text-xs">
        You can use any mail to try the app (I.E: qwerty123@gmail.com).
      </p>
      {error && (
        <div className="px-3 py-2 text-xs text-center bg-red-500 rounded cursor-pointer">
          {error}
        </div>
      )}
    </main>
  );
};

export default signup;
