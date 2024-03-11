import './home.css'
import Navbar from "../../components/navbar/default/Navbar";
import CustomContainer from '../../components/layouts/Container';
import Footer from '../../components/footer/Footer';

function Home() {
    return (
        <>
            <Navbar />
            <section className="section home">
                <CustomContainer>
                    <h1>Ultimas atualizações</h1>
                </CustomContainer>
            </section>
            <Footer/>
        </>
    )
}

export default Home
