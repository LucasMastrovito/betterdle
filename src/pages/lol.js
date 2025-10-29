import fields from "../json/lol_fields.json";
import Classic from "../components/classic/classic";
import Findmode from "../components/findmode/findmode";
import Dlemenu from "../components/dle/dlemenu";
import Dlemenubtn from "../components/dle/dlemenubtn";
import Dle from "../components/dle/dle";

function Lol() {
    const buttons = [
        <Dlemenubtn key={1} menu={true} name={"Classic"} desc={"Find the daily champion"} logo="classic-lol" index={1} />,
        <Dlemenubtn key={2} menu={true} name={"Title"} desc={"Guess by the champion's title"} logo="title-lol" index={2} />,
        <Dlemenubtn key={3} menu={true} name={"Ability"} desc={"Guess from a champion's quote"} logo="ability-lol" index={3} />,
        <Dlemenubtn key={4} menu={true} name={"Quote"} desc={"Guess from a champion's quote"} logo="quote-lol" index={4} />,
        <Dlemenubtn key={5} menu={true} name={"Picture"} desc={"Guess from a filtered image"} logo="picture-lol" index={5} />
    ];

    const modes = [
        <Dlemenu key={'menu'} title="Guess the daily champion" name="lol" menu={true} buttons={buttons} />,
        <Classic key={'classic'} name={"lol"} mode="classic" desc={"Find the daily champion"} fields={fields} first_tips={{ name: "Class", key: "class" }} second_tips={{ name: "Regions", key: "regions" }} />,
        <Findmode key={'title'} name={"lol"} mode="title" desc={"Which champion holds this title?"} filter="title" first_tips={{ name: "Class", key: "class" }} second_tips={{ name: "Regions", key: "regions" }} />,
        <Findmode key={'ability'} name={"lol"} mode="ability" desc={"Which champion has this ability?"} filter="abilities" />,
        <Findmode key={'quote'} name={"lol"} mode="quote" desc={"Which champion said this quote?"} filter="quotes" first_tips={{ name: "Class", key: "class" }} second_tips={{ name: "Regions", key: "regions" }} />,
        <Findmode key={'picture'} name={"lol"} mode="picture" desc={"Which champion does this skin belong to?"} filter="skins" />
    ];

    return (
        <div>
            <Dle
                name="lol"
                buttons={buttons}
                modes={modes}
            />
        </div>
    )
}

export default Lol;