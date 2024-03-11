import { Button, Message } from "semantic-ui-react";
import CustomContainer from "../../components/layouts/Container";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
    const navigate = useNavigate()
    return (
        <CustomContainer>
            <Button icon={'home'} secondary onClick={() => navigate('/')}/>
            <Message
                error
                header='A página não foi encontrada, erro 404'
                list={[
                    <>
                        {'Verifique se a URL passada está correta, se o erro persistir entre em contato com o suporte.'}
                    </>
                ]}
            />
        </CustomContainer>
    )
}

export default PageNotFound

