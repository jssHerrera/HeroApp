import { HeroCard } from "../components/HeroCard";
import { UseSearch } from "../hook/UseSearch";

export const SearchPage = () => {
  const {
    busqueda,
    q,
    showSearch,
    showError,
    data,
    handleChange,
    handleSubmit,
  } = UseSearch();

  return (
    <section className="search container section ">
      <h2 className="section__title">Search</h2>

      <div className="seach__container">
        <form onSubmit={handleSubmit}>
          <label className="search__box">
            <input
              id="text"
              type="text"
              placeholder="search..."
              autoComplete="off"
              name="name"
              value={busqueda.name}
              onChange={handleChange}
              className="search__text"
            />

            <button type="submit" className="search__icon-bg">
              <i className="bx bx-search-alt search__icon"></i>
            </button>
          </label>
        </form>
        <div className="search__card card__container">
          <div className="search__hero-ms">
            <label
              htmlFor="text"
              className="search__input"
              style={{ display: showSearch ? "" : "none" }}
            >
              <i className="bx bx-log-out-circle seach__icon-input"></i>
            </label>
            <p> Busque un Hero </p>
          </div>

          <div className="search__hero-ms" style={{display:showError ?'' :'none'}}>
            no se encuentra
            <small className="search__error">{q.toUpperCase()}</small>
          </div>

          {data.map((elem) => (
            <HeroCard key={elem.id} elem={elem} />
          ))}
        </div>
      </div>
    </section>
  );
};
