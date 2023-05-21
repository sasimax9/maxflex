import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function NestedDoc(props) {
    const code = {
        basic: `<div class="grid nested-grid">
    <div class="col-8">
        <div class="grid">
            <div class="col-6">
                <div>6</div>
            </div>
            <div class="col-6">
                <div>6</div>
            </div>
            <div class="col-12">
                <div>12</div>
            </div>
        </div>
    </div>
    <div class="col-4">
        <div>4</div>
    </div>
</div>
    `,
        expanded: `<div class="card">
    <div class="grid nested-grid">
        <div class="col-8">
            <div class="grid">
                <div class="col-6">
                    <div class="text-center p-3 border-round-sm bg-orange-500 font-bold text-white">6</div>
                </div>
                <div class="col-6">
                    <div class="text-center p-3 border-round-sm bg-orange-500 font-bold text-white">6</div>
                </div>
                <div class="col-12">
                    <div class="text-center p-3 border-round-sm bg-orange-500 font-bold text-white">12</div>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="text-center p-3 border-round-sm h-full bg-orange-500 font-bold text-white">4</div>
        </div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Columns can be nested to create more complex layouts.</p>
            </DocSectionText>
            <div className="card">
                <div className="grid nested-grid">
                    <div className="col-8">
                        <div className="grid">
                            <div className="col-6">
                                <div className="text-center p-3 border-round-sm bg-orange-500 font-bold text-white">6</div>
                            </div>
                            <div className="col-6">
                                <div className="text-center p-3 border-round-sm bg-orange-500 font-bold text-white">6</div>
                            </div>
                            <div className="col-12">
                                <div className="text-center p-3 border-round-sm bg-orange-500 font-bold text-white">12</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="text-center p-3 border-round-sm h-full bg-orange-500 font-bold text-white">4</div>
                    </div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}