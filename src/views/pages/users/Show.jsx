import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ShowPage from '../../components/layouts/ShowPage';
import User from '../../../service/UserService';

function ShowUser() {
    const [user, setUser] = useState(null); // Use null para inicialização
    const navigate = useNavigate();
    const { id } = useParams();
    const [errorMessage, setErrorMessage] = useState('');

    const userService = useMemo(() => new User({ navigate, setErrorMessage }), [navigate]);

    useEffect(() => {
        const fetchUser = async () => {
                userService.get(id, setUser);
        };
        fetchUser();
    }, [id, userService]);

    const remove = async () => {
        userService.delete(user?.id);
        navigate('/users');
    };

    const navigateToEdit = () => {
        navigate(`/users/edit/${id}`);
    };

    if (!user) {
        return <p>Carregando...</p>;
    }

    return (
        <>
            <ShowPage title='Usuário' obj={user} deleteAction={remove} editAction={navigateToEdit} errorMessage={errorMessage}>
                {user.name && <p>Nome: {user.name}</p>}
                {user.email && <p>Email: {user.email}</p>}
                {user.role.name && <p>Perfil: {user.role.name}</p>}
                {user.phoneNumber && <p>Telefone: {user.phoneNumber}</p>}
                {user.jobTitle && <p>Cargo: {user.jobTitle}</p>}
            </ShowPage>
        </>
    );
}

export default ShowUser;
