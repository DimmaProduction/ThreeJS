import { useState } from "react";
import css from "./styles.module.scss";

export const Header = ({onAddFigure}) => {
    const [figure, setFigure] = useState('sphere');
    const [scale, setScale] = useState(0);

    const onHandleCLick = () => {
        console.log(`figure: ${figure}, scale: ${scale}`);
        onAddFigure(figure, scale);
    }

    const onSelectChange = (e) => setFigure(e.target.value);
    const onScaleChange = (e) => setScale(e.target.value);

    return (
        <header className={css.header}>
            <select value={figure} onChange={onSelectChange}>            
                <option value="cube">Cube</option>
                <option value="sphere">Sphere</option>
                <option value="pyramida">Pyramida</option>
            </select>
            <input type="number" pattern='[0-9]{0,5}' placeholder="Scale" value={scale} onChange={onScaleChange}/>
            <button onClick={onHandleCLick}>Create</button>
        </header>
    );
}