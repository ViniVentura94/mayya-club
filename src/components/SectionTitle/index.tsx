
import { Title } from './styles';

type SectionTitleProps = {
    text: string;
};

export function SectionTitle({ text }: SectionTitleProps) {
    return <Title>{text}</Title>;
}