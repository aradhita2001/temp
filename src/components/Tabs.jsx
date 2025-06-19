import Section from "./Section";

export default function Tabs({buttons, ButtonsContainer="menu", children}){

    // const ButtonsContainer = buttonsContainer;
    console.log(ButtonsContainer);
    
    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    )
}