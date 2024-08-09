import Layout from "../components/layout";
import Head from "next/head";

const Index = () => (
    <Layout
    content={
        <div>
            <Head>
                <title>The page title</title>
            </Head>
            <h1>Home page</h1>
        </div>
    }
    />
)
export default Index