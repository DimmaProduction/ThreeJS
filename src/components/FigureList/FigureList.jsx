
import css from "./styles.module.scss";

export const FigureList = ({figures}) => {
    return(
        <div className={css.list__wrapper}>
            <ul >
                {figures.map(f => <li key={f.id}>{`ID: ${f.id} FIGURE: ${f.figure}`}</li>)}
            </ul>
        </div>
    );
}