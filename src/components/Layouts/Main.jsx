import React from 'react';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';

import Footer from '../Footer';
import Navbar from '../Navbar';
import useSiteMetadata from './SiteMetadata';

import { UIProvider } from '../../resources/UI';
import './all.sass';
import Circles from '../Home/Circles';

const TemplateWrapper = ({
  children,
  background = 'bg-jumbotron',
  navbarFixed,
  circles
}) => {
  const { title, description } = useSiteMetadata();
  return (
    <UIProvider>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar fixed={navbarFixed} />
      <main
        className={`navbar-gutter ${background} ${circles ? 'bg-circles' : ''}`}
      >
        {circles && <Circles className="circles" />}
        {children}
      </main>
      <Footer />
    </UIProvider>
  );
};

export default TemplateWrapper;
