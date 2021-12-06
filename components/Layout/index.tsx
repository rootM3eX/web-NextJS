import Head from "next/head";
import React, { ReactNode } from "react";

// mendefinisikan interface layoutprops children sebagai ReactNode atau isi dalam kontent serta
// pageTitle sebagai string
interface LayoutProps {
    pageTitle: string;
    children: ReactNode;
}

export default function Layout(props: LayoutProps) {
    // mendefinisikan pageTitle sebagai props argumen
    const {pageTitle, children} = props;
    return (
        <>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="author" content="ThemeStarz" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:400,600,700" />
            <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" type="text/css" />
            <link rel="stylesheet" href="assets/font-awesome/css/fontawesome-all.min.css" />
            <link rel="stylesheet" href="assets/css/magnific-popup.css" />
            <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
            <link rel="stylesheet" href="assets/css/style.css" />
            <title>Hi I'm Maull | {pageTitle}</title>
        </Head>
        <div>
            <div>{children}</div>
        </div>
        </>
    )
}