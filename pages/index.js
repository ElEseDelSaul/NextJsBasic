import React from 'react';     //El llamado de React con NEXTJS es opcional
import Head from 'next/head';
import fetch from 'isomorphic-fetch';

//Components
import Container from '../components/container';
import Users from '../components/users';

const Index = (props) => {
    //console.log(props.users)
    return (
        <div>
            <Container>
                <Head>
                    <title>NextJs Project - Home</title>
                </Head>
                <div className="jumbotron text-center mx-auto">
                    <h3>NextJs</h3>
                </div>

                <Users users={props.users} />

            </Container>
        </div>
    )
}


Index.getInitialProps = async () => {   //Genear peticion get a JSONPlaceholder
    const res = await fetch('https://reqres.in/api/users');
    const resJSON = await res.json();
    return { users: resJSON.data }            //Mandando data como Props hacia el componente
}

export default Index;