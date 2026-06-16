import type { ReactElement } from "react";

function Button({txt}:{txt:string}): ReactElement {
    return <button className="bg-blue-600 px-4 text-lg font-semibold rounded-sm cursor-pointer w-fit p-2">
        {txt}
    </button>
}
export default Button;