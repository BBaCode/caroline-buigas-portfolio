import Head from "next/head";
import Image from "next/image";

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
      <Image
        src="/images/BBRez.png"
        alt="First Image"
        fill="true"
        className="block"
      />
      <div>Please view on a Desktop</div>
    </>
  );
};

export default Resume;
