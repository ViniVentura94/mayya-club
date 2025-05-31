
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { Container, Title, Field, Label, Input, ErrorText, Button } from './styles';

const schema = yup.object().shape({
    name: yup.string().required('Digite seu nome'),
    email: yup.string().email('E-mail inválido').required('Digite seu e-mail'),
    address: yup.string().required('Informe seu endereço'),
});

export const CheckoutPage = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: any) => {
        console.log(data); // futuramente salvar no backend
        navigate('/sucesso');
    };

    return (
        <Container>
            <Title>Finalizar Compra</Title>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Field>
                    <Label>Nome Completo</Label>
                    <Input {...register('name')} />
                    {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
                </Field>

                <Field>
                    <Label>E-mail</Label>
                    <Input {...register('email')} />
                    {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
                </Field>

                <Field>
                    <Label>Endereço</Label>
                    <Input {...register('address')} />
                    {errors.address && <ErrorText>{errors.address.message}</ErrorText>}
                </Field>

                <Button type="submit">Confirmar Pedido</Button>
            </form>
        </Container>
    );
};
