import * as yup from "yup";

export const HomeValidate = yup.object().shape({
    dni: yup.string().trim().required("El DNI es requerido"),
    fecha: yup.string().trim().required("La fecha de nacimiento es requerido"), 
});