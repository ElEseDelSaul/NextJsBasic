import Head from 'next/head';
import Container from '../components/container';

const About = () => {
    return (
        <div>
            <Container>
                <Head>
                    <title>NextJs Project - About</title>
                </Head>
                <div className="jumbotron text-center">
                <h3>About</h3>
                <div>Contenido</div>
                </div>
            </Container>
        </div>
    )
}

export default About;