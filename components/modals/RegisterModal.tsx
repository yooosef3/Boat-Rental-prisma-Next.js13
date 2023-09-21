'use client';

import {
  FieldValues,
  SubmitHandler,
  useForm
} from "react-hook-form";
import { useCallback, useState } from "react";

import { AiFillGithub } from "react-icons/ai";
import Button from "../Button";
import { FcGoogle } from "react-icons/fc";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Modal from "./Modal";
import axios from "axios";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";

const RegisterModal= () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const { 
    register, 
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios.post('/api/register', data)
    .then(() => {
      toast.success('ثبت نام کردید!');
      registerModal.onClose();
      loginModal.onOpen();
    })
    .catch((error) => {
      toast.error(error);
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  const onToggle = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [registerModal, loginModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="خوش آمدید"
        subtitle="یک حساب بساز!"
      />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
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
  )

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button 
        outline 
        label="ادامه با Google"
        icon={FcGoogle}
        onClick={() => signIn('google')} 
      />
      <Button 
        outline 
        label="ادامه با Github"
        icon={AiFillGithub}
        onClick={() => signIn('github')}
      />
      <div 
        className="
          text-neutral-500 
          text-center 
          mt-4 
          font-light
        "
      >
        <p>از قبل حساب دارید؟
          <span 
            onClick={onToggle} 
            className="
              text-neutral-800
              cursor-pointer 
              medium
              hover:text-blue-600
            "
            > ورود</span>
        </p>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="ثبت نام"
      actionLabel="ثبت نام"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default RegisterModal;