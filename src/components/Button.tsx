import type { ReactElement } from "react";

function Button({ txt }: { txt: string }): ReactElement {
    return <button className=" relative border-amber-200 border-2 px-4 text-lg font-semibold rounded-sm cursor-pointer w-fit hover:text-gray-white hover:bg-amber-500 transform transition-all hover:shadow-lg hover:scale-105">
        <span className="p-2">{txt}</span>
    </button>
}
export default Button;