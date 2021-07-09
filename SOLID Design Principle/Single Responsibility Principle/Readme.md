## **Single  Responsibility Principle**


#### **Introductions**
---
The single responsibility principle is one of the most commonly used design principles in object-oriented programming. It can be apply to classes, software components, and microservices.


[Robert C. Martin](https://en.wikipedia.org/wiki/Robert_C._Martin)  (colloquially called "Uncle Bob") describes it as:
>_A class should have one, and only one, reason to change_

#### **Why should we use it?**
---
1. To prevents side-effect of future modification/update.
2. Loose coupling
3. Easier to understand, which will help for reducing bugs and faster development.

#### **Example**
---
````javascript
class BookList{
    constructor(){
        this.books={}
    }

    /*
    * addBook method takes book name and writer name as argument
    * create new book object using the parameters
    * add book to the book list (books) and returns the updated book list size 
    */
    addBook=(name,writer)=>{
        let book={
            name,
            writer
        }

        this.books.push(book);
        return this.books.length;
    }

    /**
    * removeBook method remove the last added book from the book list (books)
    * returns the removed book if book list has a book or returns null
    */

    removeBook=()=>{
        if(this.books.length>0){
            return this.books.pop();
        }else
        return null;
    }

    /**
    *saveTofile method takes fileName (string) as an argument
    *and saves all the books name in a file
    */

    saveToFile=(fileName)=>{
        const bookNames=this.books.map(book=>book.name).join(", ");
        fs.writeFileSync(fileName,bookNames);
    }

}
``````

#### * _The saveToFile(fileName) method is kind of second responsibility of the BookList class. Future changes to this method will may effect the other method if we want to save file before/after adding/removing book. So, to follow the priciple we have to implement the file saving operation in separate class_
 
