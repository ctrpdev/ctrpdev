"use client"

import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { ProjectAPI } from "@/api/projectAPI";
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from 'next-intl';
import * as Yup from 'yup';
import { Modal } from "@/components/Modal";

export default function Contact() {
  const t = useTranslations("ContactPage");

  const contactFormValidations = () => Yup.object({
    name: Yup.string().required(t("validation")),
    email: Yup.string().email(t("invalidMail")).required(t("validation")),
    content: Yup.string().required(t("validation")),
  });
  const [isMouseHover, setIsMouseHover] = useState(false);
  const [isMouseHoverHide, setIsMouseHoverHide] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const styleInput = "rounded-full w-full outline-none p-3 text-neutral-600 focus:shadow-md border transition-all duration-500 ease-in-out relative";

  const sendMessage = useMutation({
    mutationFn: ProjectAPI.submitContactForm,
    onSuccess: () => {
      setIsSuccess(true);
      setOpenModal(true);
    },
    onError: () => {
      setIsSuccess(false);
      setOpenModal(true);
    },
    onSettled: () => {
      setIsSubmitting(false);
    }
  });

  return (
    <main className={`${isMouseHover ? "bg-orange-500" : "bg-rose-600"} 
        w-screen min-h-screen max-h-[100vh] p-14 roboto
        grid overflow-y-auto
        transition-all duration-500 ease-in-out
        `}>

      <div className="
        xl:grid xl:grid-cols-2
        xl:justify-center xl:items-center xl:p-44
        2xl:p-44
        transition-all duration-500 ease-in-out"
      >


        <section
          className="xl:rounded-s-3xl xl:bg-orange-500 xl:h-[50vh]
        xl:place-content-center xl:place-items-center xl:p-16
        xl:hover:shadow-xl transition-all duration-500 ease-in-out fade-in-left
        "
          onMouseOver={() => setIsMouseHoverHide(true)}
          onMouseOut={() => setIsMouseHoverHide(false)}
        >

          <h1 className={`text-gray-100
        text-2xl font-semibold mb-10
        xl:text-center xl:text-5xl
        transition-all duration-500 ease-in-out select-none
        ${isMouseHoverHide ? "move-up" : ""}
        `}>
            {t("title")}
          </h1>
          <article className={`flex text-justify fade-in-short text-gray-100 text-sm ${isMouseHoverHide ? "xl:visible" : "xl:hidden"}
        md:text-lg
        2xl:text-xl 2xl:p-16 select-none
        `}>
            {t("hideMessage")}
          </article>
        </section>

        <div className="bg-white rounded-2xl mb-16
        xl:mb-0 xl:rounded-none fade-in-left
        xl:flex
        xl:rounded-e-3xl xl:h-[50vh]
        xl:place-content-center xl:place-items-center xl:p-16
        hover:shadow-xl transition-all duration-500 ease-in-out
        "
          onMouseOver={() => setIsMouseHover(true)}
          onMouseOut={() => setIsMouseHover(false)}
        >
          <Formik
            initialValues={{ name: '', content: '', email: '' }}
            validationSchema={contactFormValidations}
            onSubmit={(values, { resetForm }) => {
              setIsSubmitting(true);
              sendMessage.mutate(values);
              resetForm();
            }}
          >
            {({ isValid, dirty }) => (
              <Form className="flex flex-col gap-12 w-full 
        p-3
        text-sm
        sm:p-12
        xl:px-0
        2xl:px-12
        mt-12 h-full justify-center">
                <h1 className="hidden xl:block lg:text-2xl text-center mb-10 select-none">{t("formTitle")}</h1>
                <div className="mb-3 flex flex-col min-h-8 max-h-8">
                  <label htmlFor="name" className="text-neutral-600 select-none">{t("name")}</label>
                  <Field id="name" name="name" placeholder="John" className={`${styleInput}`} />
                  <ErrorMessage name="name" component="div" className="select-none text-rose-600 text-xs" />
                </div>

                <div className="mb-3 flex flex-col min-h-8 max-h-8">
                  <label htmlFor="email" className="text-neutral-600 select-none">{t("email")}</label>
                  <Field
                    id="email"
                    name="email"
                    placeholder="john@acme.com"
                    type="email"
                    className={`${styleInput}`}
                  />
                  <ErrorMessage name="email" component="div" className="select-none text-rose-600 text-xs" />
                </div>

                <div className="mb-3 flex flex-col min-h-8 max-h-8">
                  <label htmlFor="content" className="text-neutral-600 select-none">{t("message")}</label>
                  <Field id="content" name="content" as="textarea" placeholder={"message"} className={`${styleInput} rounded-xl resize-none`} />
                  <ErrorMessage name="content" component="div" className="select-none text-rose-600 text-xs" />
                </div>

                <button
                  type="submit"
                  disabled={!isValid || !dirty || isSubmitting}
                  className={`mt-10 rounded-full p-3 self-center transition-all w-56
            ${!isValid || !dirty || isSubmitting ? "bg-gray-300 text-neutral-600"
                      : "bg-orange-500 cursor-pointer text-white hover:shadow-xl hover:bg-rose-600 transition-all duration-500 ease-in-out"} 
                ${isSubmitting ? "bg-rose-500 animate-pulse text-white" : ""}`}
                >
                  {isSubmitting ? t("sending") : t("submit")}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <Modal showModal={openModal} onClose={() => setOpenModal(false)}
        className="flex flex-col justify-center items-center p-5">
        {isSuccess ? t("success") : t("error")}
        <button type="button" onClick={() => setOpenModal(false)}
          className="mt-12 bg-white rounded-full p-3 w-full md:w-1/2 self-center 
        text-neutral-600 hover:shadow-2xl hover:scale-[1.005] hover:animate-pulse transition">
          {t("close")}</button>
      </Modal>
    </main>
  )
}