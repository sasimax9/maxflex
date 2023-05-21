import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ExamplesDoc(props) {
    const code = {
        basic: `<div class="cursor-auto">auto</div>
<div class="cursor-pointer">pointer</div>
<div class="cursor-wait">wait</div>
<div class="cursor-move">move</div>
    `,
        expanded: `<div class="card">
    <div class="flex align-items-center justify-content-center card-container blue-container">
        <div class="cursor-auto flex align-items-center justify-content-center border-round bg-blue-500 text-white p-3 m-3 font-bold">auto</div>
        <div class="cursor-pointer flex align-items-center justify-content-center border-round bg-blue-500 text-white p-3 m-3 font-bold">pointer</div>
        <div class="cursor-wait flex align-items-center justify-content-center border-round bg-blue-500 text-white p-3 m-3 font-bold">wait</div>
        <div class="cursor-move flex align-items-center justify-content-center border-round bg-blue-500 text-white p-3 m-3 font-bold">move</div>
    </div>
</div>
`
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card">
                <div className="flex align-items-center justify-content-center card-container blue-container">
                    <div className="cursor-auto flex align-items-center justify-content-center border-round bg-blue-500 text-white p-3 m-3 font-bold">auto</div>
                    <div className="cursor-pointer flex align-items-center justify-content-center border-round bg-blue-500 text-white p-3 m-3 font-bold">pointer</div>
                    <div className="cursor-wait flex align-items-center justify-content-center border-round bg-blue-500 text-white p-3 m-3 font-bold">wait</div>
                    <div className="cursor-move flex align-items-center justify-content-center border-round bg-blue-500 text-white p-3 m-3 font-bold">move</div>
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}