var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
  img: "https://1.fwcdn.pl/po/05/71/30571/7529392.6.jpg"
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: "https://www.mylionking.com/w/images/thumb/4/4e/The_Lion_King_%28comic%29_01.jpg/220px-The_Lion_King_%28comic%29_01.jpg"
  },
 {
    id: 3,
    title: 'Truman show',
    desc: 'Film o tym, że wszystko jest iluzją',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDDCKt015N89r5bq1e-iy-4ij9iIgQIlziOIkns_AbOdb9Ye37"
  },
{
    id: 4,
    title: 'Bez lęku',
    desc: 'Film o tym, że strach jest potrzebny',
    img: "https://upload.wikimedia.org/wikipedia/en/b/b4/Fearless_ver1.jpg"
  },
  {
    id: 5,
    title: 'Stalker',
    desc: 'Film o wędrówce do tajemniczej Zony',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpv-KL57xeDqCY2-9F_Uu3FJJU1muaDgoHXo-inSdKjIZkI2uVbw"
  }
];

var MovieTitle = React.createClass ({

  render: function() {
    return (
      React.createElement("h2", {}, this.props.title)
    )
  }
});

var MovieDescription = React.createClass ({
  render: function() {
    return (
      React.createElement("p", {}, this.props.desc)
    )
  }
});

var MovieImg = React.createClass ({
  render: function() {
    return (
      React.createElement("img", {src: this.props.img})
    )
  }
});

var Movie = React.createClass ({
  render: function() {
    return (
      React.createElement("li", {key: this.props.movie.id},
        React.createElement(MovieTitle, {title: this.props.movie.title}),
        React.createElement(MovieDescription, {desc: this.props.movie.desc}),
        React.createElement(MovieImg, {img: this.props.movie.img})
      )
    )
  },
});

var MovieList = React.createClass({
  render: function() {
    var moviesElements = this.props.movies.map(function(movie) {
      return React.createElement(Movie, {key: movie.id, movie: movie})
    });
    return (React.createElement("ul", {}, moviesElements))
  },
});

var element = React.createElement("div", {},
  React.createElement("h1", {}, "Lista filmów"),
  React.createElement(MovieList, {movies: movies})
);

ReactDOM.render(element, document.getElementById('app'));





/*Zadanie: Wydzielamy komponenty!
Teraz Twoim zadaniem będzie podzielenie kodu, który napisaliśmy wcześniej, na jak najmniejsze komponenty.

Najpierw stwórz klasę Movie za pomocą var Movie = React.createClass({...});. 
Następnie dodaj do niej metodę .render() i przenieś do niej odpowiedni fragment kodu 
obsługujący wyświetlanie informacji na temat filmu.
Po napisaniu metody .render() dokonaj walidacji propsów komponentu, dodając parametr propTypes. 
Następnie stwórz instancję (ReactElement) na podstawie klasy Movie za pomocą 
 React.createElement(Movie, {key: movie_id, ...więcej_propsow},);
Pamiętaj, żeby wyciągnąć klucz z elementu li na wysokość deklaracji elementu Movie (tak jak powyżej).
Kroki od od 1 do 3 należy wykonać również dla klas: MovieTitle, MovieDescription, MoviesList :)

*/