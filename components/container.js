import Head from 'next/head';
import Navigation from './navigation'

const container = (props) => {
    return <div>
        <Head>              {/* Componente estatico */}
            <title>NextJs Project</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css" />
        </Head>
        <Navigation />       {/* Componente estatico */}
        <div>
            <div className="container">
            {props.children}    {/* Componentes que estaran cambiando */}
            </div>
        </div>
    </div>
}

export default container;