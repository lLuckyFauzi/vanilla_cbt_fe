import * as yup from 'yup'

const validationSchema = yup.object().shape({
    email: yup.string().required('Email tidak boleh kosong'),
    password: yup.string().required("Password tidak boleh kosong")
})

export default validationSchema