import fields from "../json/movie_fields.json";
import Classic from "../components/classic/classic";
import Findmode from "../components/findmode/findmode";
import Dlemenu from "../components/dle/dlemenu";
import Dlemenubtn from "../components/dle/dlemenubtn";
import Dle from "../components/dle/dle";


function Movie() {
    const buttons = [
        <Dlemenubtn key={1} menu={true} name={"Classic"} desc={"Find the daily movie"} logo="classic-movie" index={1} />,
        <Dlemenubtn key={2} menu={true} name={"Description"} desc={"Guess from the film description"} logo="description-movie" index={2} />,
        <Dlemenubtn key={3} menu={true} name={"Picture"} desc={"Guess from a filtered image"} logo="picture-movie" index={3} />
    ];

    const modes = [
        <Dlemenu key={'menu'} title="Guess the daily movie" name="movie" menu={true} buttons={buttons} />,
        <Classic key={'classic'} name={"movie"} mode="classic" desc={"Find the daily movie"} fields={fields} first_tips={{name: "", key: ""}} second_tips={{name: "", key: ""}} />,
        <Findmode key={'description'} name={"movie"} mode="description" desc={"Guess from the film description"} array={true} filter="description" />,
        <Findmode key={'picture'} name={"movie"} mode="picture" desc={"Guess from a filtered image"} filter="image_url" />
    ];

    return (
        <div>
            <Dle
                name="movie"
                buttons={buttons}
                modes={modes}
            />
        </div>
    )
}

export default Movie;