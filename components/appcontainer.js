
import  React, { useState } from "react";
import Books from "./book";
import booksList from "../mockdata/booksList";
import './appcontainer.css';

const AppContainer = ()=> {
    
    const [searchResult, setValue] = useState(booksList);

    let searchText = "";
    
    const searchFor = ()=>{
        searchText = document.getElementById("searchbox").value;
        if(searchText.length){
            setValue(booksList.filter(book=>book.genre.includes(searchText)))
        }else{
            setValue(booksList);
        }
    }

    const sortAtoZ = () =>{
        setValue(searchResult.sort((book1,book2)=>book1.name.localeCompare(book2.name)));
    }
    
    return (<>
        <div className="header">
            <input className="searchbox"  onKeyUp={searchFor} type="text" placeholder="search for gener" id="searchbox" />
            <button onClick={sortAtoZ}>Sort A to Z</button>
            <button >Sort Z to A</button>
        </div>
        <div className="grid-container">
            <Books booksList ={searchResult} />
        </div>
    </>);
}

export default AppContainer;