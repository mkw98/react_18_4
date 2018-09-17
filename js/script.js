var GalleryItem = React.createClass({
    render: function() {
    return React.createElement('h2', {}, 'Pierwszy komponent');
}
});




var GalleryItem = React.createClass({
  propTypes: {
    image: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h2', {}, this.props.image.name),
        React.createElement('img', {src: this.props.image.src})
      )
    )
  },
});


var image = {
  name: 'Kotek',
  src: 'http://imgur.com/n8OYCzR.png'
};

var element = React.createElement(GalleryItem, {image: image});
ReactDOM.render(element, document.getElementById('app'));



//Zadanie: Wydzielamy komponenty!
//Teraz Twoim zadaniem będzie podzielenie kodu, który napisaliśmy wcześniej, na jak najmniejsze komponenty.

//Najpierw stwórz klasę Movie za pomocą var Movie = React.createClass({...});. 
//Następnie dodaj do niej metodę .render() i przenieś do niej odpowiedni fragment kodu 
//obsługujący wyświetlanie informacji na temat filmu.
//Po napisaniu metody .render() dokonaj walidacji propsów komponentu, dodając parametr propTypes. 
//Następnie stwórz instancję (ReactElement) na podstawie klasy Movie za pomocą React.createElement(Movie, {key: movie_id, ...więcej_propsow},);
//Pamiętaj, żeby wyciągnąć klucz z elementu li na wysokość deklaracji elementu Movie (tak jak powyżej).
//Kroki od od 1 do 3 należy wykonać również dla klas: MovieTitle, MovieDescription, MoviesList :)