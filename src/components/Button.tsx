import type { ReactElement } from "react";

function Button({txt}:{txt:string}): ReactElement {
    return <button className="bg-blue-600 px-4 text-lg font-semibold rounded-sm cursor-pointer">
        {txt}
    </button>
}
export default Button;