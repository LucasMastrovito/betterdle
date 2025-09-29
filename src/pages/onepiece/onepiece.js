import Classic from "../../components/classic";
import data from "../../json/onepiece_characters.json";

function Onepiece() {
    return (
        <div>
            <h1>One Piece</h1>
            <Classic data={data} fields={["image_url", "sex", "affiliation", "devil_fruit_type", "haki", "height", "bounty", "origin", "first_arc"]} />
        </div>
    )
}

export default Onepiece;