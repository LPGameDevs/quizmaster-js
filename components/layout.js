import Link from "next/link";
import Head from "next/head";

export default function Layout (props) {
    return (
        <div>
            <Head>
                <title>default</title>
            </Head>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/test">Test</Link>
                    </li>
                </ul>
            </nav>
            <main>
                {props.content}
            </main>
        </div>
    )
}