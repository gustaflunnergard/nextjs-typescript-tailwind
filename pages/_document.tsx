import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
  DocumentContext,
} from "next/document";
import { extractCritical } from "@emotion/server";

const MyDocument = ({
  ids,
  css,
}: DocumentProps & { ids: string[]; css: string }) => {
  return (
    <Html lang="en">
      <Head>
        <style
          data-emotion-css={ids?.join(" ")}
          dangerouslySetInnerHTML={{ __html: css }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const initialProps = await Document.getInitialProps(ctx);
  const critical = extractCritical(initialProps.html);
  initialProps.html = critical.html;
  initialProps.styles = (
    <>
      {initialProps.styles}
      <style
        data-emotion-css={critical.ids.join(" ")}
        dangerouslySetInnerHTML={{ __html: critical.css }}
      />
    </>
  );

  return initialProps;
};

export default MyDocument;
