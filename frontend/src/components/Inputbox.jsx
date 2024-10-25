export function Inputbox({label,placeholder}){
    return <div>
        <div className="text-sm font-medium text-left py-2">
            {label}
        </div>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder={placeholder}></input>
     </div>
}