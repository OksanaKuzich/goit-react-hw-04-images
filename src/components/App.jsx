import Searchbar from './Searchbar/Searchbar';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';
import { fetchImages } from '../services/api';
import { helpers } from './utiles/helpers';

export default class App extends Component {
  state = {
    searchName: '',
    images: [],
    totalImages: 0,
    page: 1,
    isLoading: false,
    currentItem: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.searchName;
    const nextName = this.state.searchName;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevName !== nextName || prevPage !== nextPage) {
      this.getImages();
    }
  }

  getImages = () => {
    this.setState({ isLoading: true });

    const { searchName, page } = this.state;

    fetchImages(searchName, page)
      .then(({ data }) =>
        this.setState(prevState => ({
          images: [...prevState.images, ...helpers(data.hits)],
          totalImages: data.totalHits,
        }))
      )
      .catch(error => console.log(error.message))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleFormSubmit = searchName => {
    if (searchName !== this.state.searchName) {
      this.setState({ page: 1, images: [] });
    }

    this.setState({ searchName });
  };

  onClickButtonLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onOpenModal = data => {
    this.setState({
      currentItem: data,
    });
  };

  onCloseModal = () => {
    this.setState({
      currentItem: null,
    });
  };

  render() {
    const { images, isLoading, currentItem } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {images.length !== 0 && (
          <>
            <ImageGallery images={images} onClickShowModal={this.onOpenModal} />
            {!isLoading && <Button onClick={this.onClickButtonLoadMore} />}
          </>
        )}
        {isLoading && <Loader />}
        {currentItem && (
          <Modal onCloseModal={this.onCloseModal} currentItem={currentItem} />
        )}
      </>
    );
  }
}
