import { Message, MessageHeader } from "semantic-ui-react";
import CustomContainer from "../../components/layouts/Container";
import Footer from "../../components/footer/Footer";

function AccessDenied() {
    return (
        <>
            <CustomContainer >
                <Message negative >
                    <MessageHeader>Acesso Negado</MessageHeader>
                    <p>Faça <a href="/login">Login</a> para continuar.</p>
                </Message>
            </CustomContainer>
            <Footer />
        </>

    )
}

export default AccessDenied
