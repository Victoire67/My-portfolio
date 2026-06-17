import type { ReactElement } from "react";

function Button({txt}:{txt:string}): ReactElement {
    return <button className="border-amber-200 border-2 px-4 text-lg font-semibold rounded-sm cursor-pointer w-fit p-2 hover:bg-amber-400 hover:text-gray-white">
        {txt}
    </button>
}
export default Button;