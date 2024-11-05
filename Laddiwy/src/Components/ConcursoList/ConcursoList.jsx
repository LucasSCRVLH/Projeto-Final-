import UseConcursos from "../../hooks/UseConcurso";

const ConcursoList = () => {
  const { concursos, loading } = UseConcursos();

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      <h1>Lista de Concursos</h1>

      <ul>
        {concursos.map((concurso, index) => (
          <li key={index}>
            <a href={concurso.link} target="_blank" rel="noopener noreferrer">
              {concurso.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConcursoList;
