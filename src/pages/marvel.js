import fields from "../json/marvel_fields.json";
import Classic from "../components/classic/classic";
import Findmode from "../components/findmode/findmode";
import Dlemenu from "../components/dle/dlemenu";
import Dlemenubtn from "../components/dle/dlemenubtn";
import Dle from "../components/dle/dle";


function Marvel() {
    const buttons = [
        <Dlemenubtn key={1} menu={true} name={"Classic"} desc={"Find the daily Marvel character"} logo="classic-marvel" index={1} />,
        <Dlemenubtn key={2} menu={true} name={"Name"} desc={"Guess from the real name"} logo="name-marvel" index={2} />,
        <Dlemenubtn key={3} menu={true} name={"Picture"} desc={"Guess from a filtered image"} logo="picture-marvel" index={3} />
    ];

    const modes = [
        <Dlemenu key={'menu'} title="Guess the daily Marvel character" name="marvel" menu={true} buttons={buttons} />,
        <Classic key={'classic'} name={"marvel"} mode="classic" desc={"Find the daily character"} fields={fields} first_tips={{name: "Affiliations", key: "affiliations"}} second_tips={{name: "Relations", key: "relations"}} />,
        <Findmode key={'name'} name={"marvel"} mode="name" desc={"Guess from the real name"} filter="real_name" first_tips={{name: "Affiliations", key: "affiliations"}} second_tips={{name: "Relations", key: "relations"}} />,
        <Findmode key={'picture'} name={"marvel"} mode="picture" desc={"Guess from a filtered image"} filter="image_url" />
    ];
    
    return (
        <div>
            <Dle
                name="marvel"
                buttons={buttons}
                modes={modes}
            />
        </div>
    )
}

export default Marvel;