import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from "next/head";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Home() {
  const { t } = useTranslation('common')
  return (
    <div className="pt-10 pb-20 hero bg-gradient-to-br from-base-300 to-base-100">
      <Head>
        <title>Wassim Arfa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <button className="btn btn-primary">{t('Button')} {t('DaisyUI')} </button>  
        <br/><LanguageSwitcher/>   
      </main>
    </div>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    }
  } 
}