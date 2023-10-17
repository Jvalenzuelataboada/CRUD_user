import { IconSquareRoundedXFilled } from "@tabler/icons-react";
import {
  EMAIL_VALIDATIONS,
  INPUT_VALIDATIONS,
  URL_IMAGE_VALIDATIONS,
  DATE_VALIDATIONS,
} from "../constants/formValidation";

const Modal = ({
  isShowModal,
  handleClosedModal,
  handleSubmit,
  register,
  submit,
  idUserToEdit,
  errors,
}) => {
  return (
    <section
      className={`fixed top-0 bottom-0 left-0 right-0 bg-black/10 flex justify-center items-center px-3 transition-all ${
        isShowModal ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <form
        onSubmit={handleSubmit((data) => submit(data))}
        className="bg-slate-100 p-3 rounded-md grid gap-2 text-lg font-semibold w-[min(100%,_270px)] absolute"
      >
        <h2 className="text-center">
          {idUserToEdit ? "Editar" : "Crear Usuario"}
        </h2>
        <button
          onClick={handleClosedModal}
          type="button"
          className="text-red-500 hover:text-red-600 absolute top-2 right-2 transition-colors "
        >
          <IconSquareRoundedXFilled />
        </button>

        <div className="grid gap-1">
          <label className="text-sm font-light" htmlFor="first_name">
            Nombre
          </label>
          <input
            className="rounded outline-none border border-blue-950/60 px-2 py-1"
            id="first_name"
            type="text"
            {...register("first_name", INPUT_VALIDATIONS)}
          />
          {errors.first_name && (
            <span className="text-xs text-red-500">{errors.first_name.message}</span>
          )}
        </div>
        <div className="grid gap-1">
          <label className="text-sm font-light" htmlFor="last_name">
            Apellido
          </label>
          <input
            className="rounded outline-none border border-blue-950/60 px-2 py-1"
            id="last_name"
            type="text"
            {...register("last_name", INPUT_VALIDATIONS)}
          />
        </div>
        <div className="grid gap-1">
          <label className="text-sm font-light" htmlFor="color">
            Fecha Nacimiento
          </label>
          <input
            className="rounded outline-none border border-blue-950/60 px-2 py-1"
            id="birthday"
            type="date"
            {...register("birthday", DATE_VALIDATIONS)}
          />
        </div>

        <div className="grid gap-1">
          <label className="text-sm font-light" htmlFor="email">
            Email{" "}
          </label>
          <input
            className="rounded outline-none border border-blue-950/60 px-2 py-1"
            id="email"
            type="text"
            {...register("email", EMAIL_VALIDATIONS)}
            autoComplete="username"
          />
          {errors.email && (
            <span className="text-xs text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div className="grid gap-1">
          <label className="text-sm font-light" htmlFor="image_url">
            URL imagen{" "}
          </label>
          <input
            className="rounded outline-none border border-blue-950/60 px-2 py-1"
            id="image_url"
            type="text"
            {...register("image_url", URL_IMAGE_VALIDATIONS)}
          />
          {errors.image_url && (
            <span className="text-xs text-red-500">
              {errors.image_url.message}
            </span>
          )}
        </div>

        <div className="grid gap-1">
          <label className="text-sm font-light" htmlFor="password">
            Contraseña
          </label>
          <input
            className="rounded outline-none border border-blue-950/60 px-2 py-1"
            id="password"
            type="password"
            {...register("password")}
            autoComplete="current-password"
          />
          {errors.password && (
            <span className="text-xs text-red-500">{errors.password.message}</span>
          )}
        </div>

        <button
          className="bg-emerald-400 font-semibold text-blue-950 px-2 py-1 rounded-md hover:bg-orange-600 transition-colors"
        >
          {idUserToEdit ? "Guardar cambios" : "Crear Usuario"}
        </button>
      </form>
    </section>
  );
};

export default Modal;
