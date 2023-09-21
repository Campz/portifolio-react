function ContactsPage() {
  return (
    <>
    
      <h3>Contatos</h3>
      <p>Se interessou pelo meu portifolio? Encontre-me nos links abaixo:</p>
      <div className="align-self-start mb-2">
        <i className="fa-brands fa-linkedin me-1"></i>
        <a href="https://www.linkedin.com/in/rafavictor">Linkedin</a>
      </div>
      <div className="align-self-start mb-2">
        <i className="fa-brands fa-github me-1"></i>
        <a href="https://github.com/Campz">Github</a>
      </div>
      <div className="align-self-start mb-2">
        <i className="fa-solid fa-envelope me-1"></i>
        <a href="mailto:rafacampz00@gmail.com">Email</a>
      </div>
    </>
  );
}

export default ContactsPage;
