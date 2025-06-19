export default function TabButton({children, isSelected, ...props }){

    console.log("TabButton loaded");
    return <li><button className={isSelected ? "active" : undefined} {...props}>{children}</button></li>;
}