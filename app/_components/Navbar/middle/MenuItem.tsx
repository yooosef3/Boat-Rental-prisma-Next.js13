"use client"
interface MenuItemProps {
    name: string
    onclick: () => void
}
const MenuItem:React.FC<MenuItemProps> = ({name, onclick}) => {
    return (
        <div className="hover:bg-[#998363] px-4 py-1 rounded-md cursor-pointer duration-200" onClick={onclick}>
            {name}
        </div>
    );
};

export default MenuItem;