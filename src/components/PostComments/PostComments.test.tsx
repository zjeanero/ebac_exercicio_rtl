import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Deve inserir dois comentários', () => {
        render(<PostComment />);

        const campoComentario = screen.getByTestId('campo-comentario');
        const botaoComentar = screen.getByTestId('botao');
        
        fireEvent.change(campoComentario, {target: {value: 'Primeiro comentário'}});
        fireEvent.click(botaoComentar);
        
        fireEvent.change(campoComentario, {target: {value: 'Segundo comentário'}});
        fireEvent.click(botaoComentar);

        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});

