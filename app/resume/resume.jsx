import Head from "next/head";

const Resume = () => {
  return (
    <>
      <Head>
        <meta
          httpEquiv="Content-Disposition"
          content="attachment; filename=CarolineBuigasResume.pdf"
        />
        <meta httpEquiv="Content-Type" content="application/pdf" />
      </Head>
    </>
  );
};

export default Resume;
