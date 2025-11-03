import fields from "../json/epitech_fields.json";
import Classic from "../components/classic/classic";
import Dle from "../components/dle/dle";
import Dlemenubtn from "../components/dle/dlemenubtn";
import Dlemenu from "../components/dle/dlemenu";

function Tek() {
    const buttons = [
        <Dlemenubtn key={1} menu={true} name={"Classic"} desc={"Trouve la personne du jour"} logo="classic" index={1} />
    ];

    const modes = [
        <Dlemenu key={'menu'} title="Trouve la personne du jour" name="epitech" menu={true} buttons={buttons} />,
        <Classic key={'classic'} name={"epitech"} mode="classic" desc={"Trouve la personne du jour"} fields={fields} />
    ];

    return (
        <div>
            <Dle
                name="epitech"
                buttons={buttons}
                modes={modes}
            />
        </div>
    )
}

export default Tek;