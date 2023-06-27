import Footer from "./components/Footer";
import ThemedImage from "./components/ThemedImage";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

export default {
  banner: {
    key: "banner",
    text: (
      <a href="#" target="_blank">
        📌 Delite-Beta is here! Get started →
      </a>
    ),
  },
  chat: {
    link: "https://discord.gg/delitesystems",
  },
  darkMode: true,
  docsRepositoryBase:
    "https://github.com/delitesystems/delite-mono/blob/main/packages/website",
  editLink: {
    text: "Edit this page ↗",
  },
  feedback: {
    content: null,
  },
  footer: {
    component: Footer,
  },
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    return (
      <>
        <meta property="og:url" content={`https://delite.builders${asPath}`} />
        <meta property="og:title" content={frontMatter.title || "Delite"} />
        <meta
          property="og:description"
          content={
            frontMatter.description ||
            "A decentralized, Ethereum-equivalent ZK-Rollup."
          }
        />
        <meta
          property="og:image"
          content={"/images/Delite_social_media_preview.png"}
        />
        <link rel="icon" href="/images/favicon.svg" />
      </>
    );
  },
  logo: <ThemedImage />,
  nextThemes: {
    defaultTheme: "light",
  },
  primaryHue: 323,
  project: {
    link: "https://github.com/delitesystems",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Delite",
    };
  },
};
