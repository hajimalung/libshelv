import './book.css'

const Books = ({booksList}) =>{
    let contentToLoad = ""
    if(booksList.length==0){
        contentToLoad = "No Books To Show!!";
    }else{
        contentToLoad = booksList.map((book)=>(
            <>
                <div className='card'>
                    <label><b>Name:</b>{book.name}</label>
                    <label><b>Author:</b>{book.author}</label>
                    <label><b>Genre:</b> {book.genre}</label> 
                    <label><b>Year:</b> {book.date}</label> 
                    <label><b>Ratings:</b> { book.ratings }</label>
                    <label><b>Price:</b> {book.price}</label>
                </div>
            </>
        ))
    }
    return (<>
            {contentToLoad}
            </>)
}

export default Books;