import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ResponsiveDoc(props) {
    const code = {
        basic: `<div class="w-20rem">
    <div class="w-min md:w-max">w-min on small screen</div>
</div>
    `,
        expanded: `<div class="card">
    <div class="flex flex-wrap align-items-center justify-content-center card-container purple-container">
        <div class="border-round bg-purple-100 w-20rem p-3 m-3">
            <div class="w-min md:w-max border-round bg-purple-500 text-white font-bold p-3 flex align-items-center justify-content-center">w-min on small screen</div>
        </div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Responsive alternatives are available for customizations based on screen size. Add the responsive breakpoint keyword followed by a semi-colon as a prefix such as <i>md:w-full</i> to use a responsive class.
                </p>
                <div className="doc-tablewrapper">
                    <table className="doc-table">
                        <thead>
                            <tr>
                                <th>Class</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>sm:</td>
                                <td>small screens e.g. phones</td>
                            </tr>
                            <tr>
                                <td>md:</td>
                                <td>medium screens e.g. tablets</td>
                            </tr>
                            <tr>
                                <td>lg:</td>
                                <td>large screens e.g. notebooks</td>
                            </tr>
                            <tr>
                                <td>xl:</td>
                                <td>larger screens e.g monitors</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DocSectionText>
            <div className="card">
                <div className="flex flex-wrap align-items-center justify-content-center card-container purple-container">
                    <div className="border-round bg-purple-100 w-20rem p-3 m-3">
                        <div className="w-min md:w-max border-round bg-purple-500 text-white font-bold p-3 flex align-items-center justify-content-center">w-min on small screen</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}