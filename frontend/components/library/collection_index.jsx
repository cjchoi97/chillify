import React from 'react';
import { Link } from 'react-router-dom'

class CollectionIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger
    this.props.fetchItems();
    this.props.fetchUser(this.props.currentUser.id);
  }

  componentDidUpdate(prevProps) {
    if (Object.values(this.props.items).length !== Object.values(prevProps.items).length) {
      this.props.fetchUser(this.props.currentUser.id);
    }
  }

  render() {
    const { items, currentUser, itemType, creators } = this.props
    const filteredItems = Object.values(items).length > 0 ? currentUser.playlistIds.map(id => {
      return items[id]
    }) : [];
    // debugger

    const indexItems = filteredItems.map(item => {
      if (!item) return null;
      return(
        <Link className="item" key={item.id} to={`/${itemType}/${item.id}`}>
          <img src={item.photoUrl} />
          <div className="item-title">{item.title}</div>
          <div className="item-creator">By {creators[item.user_id].username}</div>
        </Link>
      );
    });

    // debugger

    return (
      <div className="collections">
        <h1 className="collection-type-text">{itemType}</h1>
        <div className="collection-index">
          {indexItems}
        </div>
      </div>
    );
  }
}

export default CollectionIndex;