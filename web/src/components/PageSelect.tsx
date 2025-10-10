import type {ChangeEvent, Dispatch, SetStateAction} from "react";
import "./pageselect.css";

type PageSelectProps = {
    changeOffset: Dispatch<SetStateAction<number>>,
    changeSize: Dispatch<SetStateAction<number>>,
    minOffset: number,
    maxOffset: number,
    pageSize: number,
}

function PageSelect(props: PageSelectProps) {
    const {changeOffset, changeSize, pageSize} = props;
    const {minOffset, maxOffset} = props;

    function incrementPage() {
        changeOffset(prev => Math.min(prev+pageSize, maxOffset));
    }

    function decrementPage() {
        changeOffset(prev => Math.max(prev-pageSize, minOffset));
    }

    function selectPageSize(e: ChangeEvent<HTMLSelectElement>) {
        changeSize(Number(e.currentTarget.value));
        changeOffset(0);
    }

    function generatePageOptions() {
        const defaultOptions = new Set([5, 10, 15, 20, 25]);
        defaultOptions.add(pageSize);
        const options = Array.from(defaultOptions);
        return options.sort((a,b) => a-b).map(
            option => <option key={option} value={option}>{option}</option>
        );
    }

    return (
        <div className="pagination-controls">
            <button className="pagination-button" onClick={decrementPage}>{"<"}</button>
            <div className="page-size-control">
                <p className="page-size-label">{`Logs Per Page: ${pageSize}`}</p>
                <select className="page-size-select" onChange={selectPageSize} value={pageSize}>
                    {generatePageOptions()}
                </select>
            </div>
            <button className="pagination-button" onClick={incrementPage}>{">"}</button>
        </div>
    );
}

export default PageSelect;
