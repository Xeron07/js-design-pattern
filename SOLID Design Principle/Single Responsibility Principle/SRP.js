const fs = require("fs");

class BookList{
    constructor(){
        this.books=[]
    }

    addBook=(bookName, writerName)=>{
        const book={
           name: bookName,
           writer: writerName
        }

        this.books.push(book);
        return this.books.length;
    }

    removeBook=()=>{
        return this.books.length>0?this.books.pop():null;
    }

    getBookNames=()=>this.books.map(book=>book.name).join(", ");

}

class FileOperation{
    saveToFile=(FileName, data)=>{
        try{
            fs.writeFileSync(FileName,data);
           console.log("success");
       }catch(exception){
           console.error(exception);
       }
    }
}


let bookList = new BookList();

bookList.addBook("Test1","Mr. Demo");
bookList.addBook("Test2","Mr. Dummy");

console.log(bookList.removeBook());

bookList.addBook("Test1","Mr. Demo-2");
bookList.addBook("Test2","Mr. Dummy-2");

let fileOperation = new FileOperation();

fileOperation.saveToFile("Book_Names.txt",bookList.getBookNames());