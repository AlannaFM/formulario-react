import '../App.css';
import { Formik, Field, Form } from 'formik';

import * as Yup from 'yup';



const esquema = Yup.object().shape({
    nome: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
    escolaridade: Yup.string().required("Campo obrigatório"),
    telefone: Yup.string().matches(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, "Telefone inválido)").required("Campo obrigatório"),
    cep: Yup.string().matches(/^\d{5}-?\d{3}$/, "CEP inválido").required("Campo obrigatório"),
    rua: Yup.string().required("Campo obrigatório"),
    bairro: Yup.string().required("Campo obrigatório"),
    profissao: Yup.string().required("Campo obrigatório"),
    numero: Yup.string().matches(/^\d+$/, "Digite apenas números").required("Campo obrigatório"),
    cpf: Yup.string().matches(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/, "CPF inválido ").required("Campo obrigatório"),
    planeta: Yup.string().required("Campo obrigatório"),
    outros: Yup.array().min(1, "Você deve aceitar ao menos um dos termos"),
});


export default function Formulario() {
    return (
        <Formik
            initialValues={{
                nome: "",
                email: "",
                rua: "",
                bairro: "",
                profissao: "",
                escolaridade: "EF",
                planeta: "",
                telefone: "",
                cep: "",
                numero: "",
                cpf: "",
                outros: [],
            }}
            validationSchema={esquema}
            onSubmit={values => {
                alert(values);
            }}
        >


            <Form className='formulario'>
                <label htmlFor="nome">Nome</label>
                <Field className='input' id="nome" name="nome" type="text" />

                <label htmlFor="email">E-mail</label>
                <Field className='input' id="email" name="email" type="email" />

                <label htmlFor="rua">Rua</label>
                <Field className="input" name="rua" type="text" />

                <label htmlFor="bairro">Bairro</label>
                <Field className="input" name="bairro" type="text" />

                <label htmlFor="profissao">Profissão</label>
                <Field className="input" name="profissao" type="text" />

                <label htmlFor="escolaridade">Escolaridade</label>
                <Field className='input' id="escolaridade" name="escolaridade" as="select">
                    <option value="EF">Ensino Fundamental</option>
                    <option value="EM">Ensino Médio</option>
                    <option value="graduacao">Graduação</option>
                    <option value="posGrad">Pós-graduação</option>
                </Field>

                <label htmlFor="planeta">Planeta que deseja visitar</label>
                <Field className="input" name="planeta" as="select">
                    <option value="">Selecione</option>
                    <option value="Marte">Marte</option>
                    <option value="Vênus">Vênus</option>
                    <option value="Saturno">Saturno</option>
                    <option value="Júpiter">Júpiter</option>
                    <option value="Netuno">Netuno</option>
                </Field>

                <label htmlFor="telefone">Telefone</label>
                <Field className='input' id="telefone" name="telefone" type="text" />

                <label htmlFor="cep">CEP</label>
                <Field className='input' id="cep" name="cep" type="text" />

                <label htmlFor="numero">Número da casa</label>
                <Field className="input" name="numero" type="text" />

                <label htmlFor="cpf">CPF</label>
                <Field className="input" name="cpf" type="text" />

                <div role="group" aria-labelledby="grupo-checkbox">
                    <label>
                        <Field type="checkbox" name="outros" value="termo1" />
                        Eu estou em plena saúde
                    </label>
                    <label>
                        <Field type="checkbox" name="outros" value="termo2" />
                        Eu aceito os riscos da viagem
                    </label>
                </div>

                <button type="submit">Enviar</button>
            </Form>

        </Formik>
    );
};

