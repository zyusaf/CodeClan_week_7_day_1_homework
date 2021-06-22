import Film from "./Film";

const FilmList = ({films}) => {

    const filmNodes = films.map(film => {
        return(
            <a href={film.url}><Film name={film.name} key={film.id}></Film></a>
        );
    });

    return(
        <>
            {filmNodes}
        </>
    );
}

export default FilmList;