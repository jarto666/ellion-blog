import Head from "next/head";

const HeadTitle = ({ title }: { title: string }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
    </>
  );
};

export default HeadTitle;
