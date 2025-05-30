

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container, Title, Field, Label, Input, ErrorText, Button } from './styles';

const schema = yup.object().shape({
    name: yup.string().required('Digite seu nome'),
    email: yup.string().email('E-mail inválido').required('Digite seu e-mail'),
    address: yup.string().required('Informe seu endereço'),
});

export const CheckoutPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: any) => {
        alert('Pedido confirmado! (simulação)');
        console.log(data);
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
