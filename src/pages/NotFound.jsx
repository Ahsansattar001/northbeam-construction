import PageIntro from '../components/PageIntro.jsx';
import Button from '../components/Button.jsx';
import useDocumentTitle from '../hooks/useDocumentTitle.js';

export default function NotFound() {
  useDocumentTitle('Page not found');

  return (
    <>
      <PageIntro title="That page isn't here" lead="The link may be out of date or the address mistyped." />
      <section className="section">
        <div className="container">
          <Button to="/" variant="primary">Back to the home page</Button>
        </div>
      </section>
    </>
  );
}
