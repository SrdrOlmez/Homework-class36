function createBookList(books) {
  const list = document.createElement('ul');

  books.forEach((books) => {
    const listItem = document.createElement('li');
    const par = document.createElement('p');
    const image = document.createElement('img');
    par.textContent = `${books.title} written by ${books.author}`;
    image.src = `https://covers.openlibrary.org/b/isbn/${books.isbn}-M.jpg`;
    image.alt = `${books.title}`;
    books.alreadyRead
      ? (listItem.style.backgroundColor = 'green')
      : (listItem.style.backgroundColor = 'red');

    listItem.appendChild(par);
    listItem.appendChild(image);
    list.appendChild(listItem);
  });

  return list;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
