import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ResponsiveDoc(props) {
    const code = {
        basic: `<div class="flex flex-wrap" style="min-height: 200px">
    <div class="z-1 md:z-0 relative" style="width: 100px; height: 100px; left:25px">1</div>
    <div class="z-0 relative" style="width: 100px; height: 100px; top:10px">2</div>
</div>
    `,
        expanded: `<div class="card">
    <div class="card-container yellow-container flex flex-wrap justify-content-center" style="min-height: 200px">
        <div class="z-1 md:z-0 relative flex align-items-center justify-content-center p-4 bg-yellow-500 font-bold text-gray-900 border-round shadow-1" style="width: 100px; height: 100px; left:25px">1</div>
        <div class="z-0 relative flex align-items-center justify-content-center p-4 bg-yellow-500 font-bold text-gray-900 border-round shadow-1" style="width: 100px; height: 100px; top:10px">2</div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Responsive alternatives are available for customizations based on screen size. Add the responsive breakpoint keyword followed by a semi-colon as a prefix such as <i>md:z-1</i> to use a responsive class.
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
                <div className="card-container yellow-container flex flex-wrap justify-content-center" style={{ minHeight: '200px' }}>
                    <div className="z-1 md:z-0 relative flex align-items-center justify-content-center p-4 bg-yellow-500 font-bold text-gray-900 border-round shadow-1" style={{ width: '100px', height: '100px', left: '25px' }}>
                        1
                    </div>
                    <div className="z-0 relative flex align-items-center justify-content-center p-4 bg-yellow-500 font-bold text-gray-900 border-round shadow-1" style={{ width: '100px', height: '100px', top: '10px' }}>
                        2
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}