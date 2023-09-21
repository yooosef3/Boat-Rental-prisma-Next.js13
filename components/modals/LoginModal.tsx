"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCallback, useState } from "react";

import { AiFillGithub } from "react-icons/ai";
import Button from "../Button";
import { FcGoogle } from "react-icons/fc";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Modal from "./Modal";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("وارد شدید!");
        router.refresh();
        loginModal.onClose();
      }

      if (callback?.error) {
        toast.error("کاربر موجود نیست!");
      }
    });
  };

  const onToggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="خوش برگشتی" subtitle="وارد حسابتان شوید!" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="ادامه با Google"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      />
      <Button
        outline
        label="ادامه با Github"
        icon={AiFillGithub}
        onClick={() => signIn("github")}
      />
      <div
        className="
      text-neutral-500 text-center mt-4 font-light"
      >
        <p>
          اولین باره استفاده می کنی؟
          <span
            onClick={onToggle}
            className="
              text-neutral-800
              cursor-pointer medium
              hover:text-blue-600
            "
          >
            {" "}
            یک حساب بساز
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="ورود"
      actionLabel="ورود"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
