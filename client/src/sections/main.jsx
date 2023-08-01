import React from "react";
import Header from "./header";
import Body from "./body";

const Main = () => {
    return(
        <main className="flex-col bg-white">
            <Header/>
            <Body/>
        </main>
    )
}

export default Main;